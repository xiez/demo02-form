import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { nameExists } from './form-validator';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  // model
  department = [
    {
      id: 0,
      name: '研发一部',
      menus: []
    }, {
      id: 1,
      name: '研发二部',
      menus: []
    },
      {
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

  // state
  hasSubmitted = false;         // 是否提交节目
  saveBtnDisabled = true;     // 保存按钮是否禁用
  selectedDept = this.department[0].name; // 当前选中的部门

  // form
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const that = this;
    this.myForm = this.fb.group({
      name: [null, [
        Validators.required,
        nameExists(() => this.allMenus.bind(that))
      ]],
    });
  }

  // 当前添加的所有节目
  allMenus(): string[] {
    return this.department.map(o => o.menus).reduce((acc, val) => [...acc, ...val], []);
  }

  // 计算保存按钮的状态
  isSaveBtnDisabled(): boolean {
    return (
      this.department.some (o => o.menus.length < 3) ?
        this.saveBtnDisabled = true :
        this.saveBtnDisabled = false
    );
  }

  // ------------------------------
  // getter
  // ------------------------------
  get nameControl() {
    return this.myForm.get('name');
  }

  // ------------------------------
  // event handler
  // ------------------------------
  deleteDept( data: string): void {
    this.department.map(dept => {
      dept.menus = dept.menus.filter(o => o !== data);
    });
    this.isSaveBtnDisabled();
  }

  selectDept(value: string): void {
    this.selectedDept = value;
  }

  addMenu(): void {
    const dept = this.department.filter(item => item.name === this.selectedDept)[0];
    dept.menus.push(this.nameControl.value);
    this.myForm.reset();
    this.isSaveBtnDisabled();
  }

  submit(): void {
    this.hasSubmitted = true;
  }
}
