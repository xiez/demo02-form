import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Demo06RoutingModule } from './demo06-routing.module';
import { Demo06Component } from './demo06.component';


@NgModule({
  declarations: [Demo06Component],
  imports: [
    CommonModule,
    FormsModule,
    Demo06RoutingModule
  ]
})
export class Demo06Module { }
