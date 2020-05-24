import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { nameExists } from './form-validator';

@Component({
  selector: 'app-demo7-list',
  template: `
  <div class = "form-list">
    <nz-table #basicTable [nzData]="department" [nzShowPagination]="false">
      <thead>
        <tr>
          <th nzAlign = "center">部门</th>
          <th nzAlign = "center">节目</th>
        </tr>
      </thead>
      <tbody ngDefaultControl>
        <tr *ngFor="let item of basicTable.data; let i = index">
          <td nzAlign = "center">{{item.name}}</td>
          <td nzAlign = "center">
            <div *ngFor = "let data of item.menus">
              <span class = "width">{{data}}</span>
              <a class = "icon-del" (click) = "deleteDept(data)" *ngIf = "!hasSubmitted">delete</a>
            </div>
          </td>
        </tr>
      </tbody>
    </nz-table>

    <button nz-button nzType="primary" class="save-button" (click) = "submit()" *ngIf = "!hasSubmitted" [disabled] = "saveBtnDisabled">保存</button>
  </div>
`,

  styleUrls: ['./demo7.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
class Demo7ListComponent {
  @Input()
  department: any[];

  @Output('dept')
  deptEmitter = new EventEmitter<string>();

  @Output('submitForm')
  submitEmitter = new EventEmitter<boolean>();

  hasSubmitted: boolean = false;
  saveBtnDisabled: boolean = false;     // 保存按钮是否禁用

  submit(): void {
    console.log(`emit submit event`)
    this.hasSubmitted = true
    this.submitEmitter.emit(true)
  }

  deleteDept(dept:string) {
    console.log(`emit delete dept ${dept}`)
    this.deptEmitter.emit(dept)
  }

  ngDoCheck() {
    console.log('check save btn status..')

    // 计算保存按钮的状态
    this.department.some (o => o.menus.length < 3) ?
      this.saveBtnDisabled = true :
      this.saveBtnDisabled = false
  }
  
}


@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss'],
})
class Demo7Component implements OnInit {

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
    //   {
    //   id: 2,
    //   name: '研发三部',
    //   menus: []
    // }, {
    //   id: 3,
    //   name: '研发四部',
    //   menus: []
    // }, {
    //   id: 4,
    //   name: '产品部',
    //   menus: []
    // }, {
    //   id: 5,
    //   name: '综合管理部',
    //   menus: []
    // },
  ];

  // state
  selectedDept = this.department[0].name; // 当前选中的部门
  hasSubmitted = false;

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

  // ------------------------------
  // getter
  // ------------------------------
  get nameControl() {
    return this.myForm.get('name');
  }

  // ------------------------------
  // event handler
  // ------------------------------

  selectDept(value: string): void {
    this.selectedDept = value;
  }

  addMenu(): void {
    const dept = this.department.filter(item => item.name === this.selectedDept)[0];
    dept.menus.push(this.nameControl.value);
    this.myForm.reset();
  }

  get runChangeDetection() {
    console.log('checking the view')
    return true;
  }

  deleteDept(data: string): void {
    console.log(`delete dept ${data}`)
    this.department.map(dept => {
      dept.menus = dept.menus.filter(o => o !== data);
    });
  }

  submitForm(): void {
    console.log(`got submit event`)
    this.hasSubmitted = true;
  }
  
}

export {
  Demo7Component,
  Demo7ListComponent
}
