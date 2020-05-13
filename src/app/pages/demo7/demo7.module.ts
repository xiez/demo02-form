import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule} from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { Demo7RoutingModule } from './demo7-routing.module';
import { Demo7Component } from './demo7.component';


@NgModule({
  declarations: [Demo7Component],
  imports: [
    CommonModule,
    FormsModule,
    Demo7RoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class Demo7Module { }
