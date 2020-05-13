import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  department = [
    {
      id: 0,
      name: '研发一部',
      menus: []
    }, {
      id: 1,
      name: '研发二部',
      menus: []
    }, {
      id: 2,
      name: '研发三部',
      menus: []
    }, {
      id: 3,
      name: '研发四部',
      menus: []
    }, {
      id: 4,
      name: '产品部',
      menus: []
    }, {
      id: 5,
      name: '综合管理部',
      menus: []
    },
  ];

  menus = [];

  submitFlag = false;

  departmentName = this.department[0].name;
  menuTitle = '';

  myForm: FormGroup;
  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group({
      name: [null, [Validators.required, this.nameExists(this.menus)]],
      num: [null, [this.minNum(this.department)]]
    });
  }

  nameExists(list: any): ValidatorFn {
    return (control: AbstractControl) => {
      if (list.includes(control.value)) {
        return { exists: true};
      }
      return null;
    };
  }

  minNum(list: any): ValidationErrors  {
    return (control: AbstractControl) => {
      if (list.some (o => o.menus.length < 3)) {
        return { numSum: true };
      }

      return null;
    };
  }

  get nameControl() {
    return this.myForm.get('name');
  }

  searchSelect(value): void {
    this.departmentName = value;
  }

  delete( data: string): void {
    this.department.forEach(item => {
      if (item.menus.includes(data)) {
        item.menus = item.menus.filter(o => o !== data);
      }
    });
    this.menus.splice(this.menus.findIndex( v => v === data), 1);
  }

  addMenu(): void {
    this.department.filter(item => {
      if (item.name === this.departmentName) {
        item.menus.push(this.nameControl.value);
        this.menus.push(this.nameControl.value);
        this.myForm.reset();
      }
    });
  }

  submit(): void {
    this.submitFlag = true;
  }

  ngOnInit(): void {
  }

}
