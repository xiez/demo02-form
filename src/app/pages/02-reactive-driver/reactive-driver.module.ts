import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDriverRoutingModule } from './reactive-driver-routing.module';
import { ReactiveDriverComponent } from './reactive-driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactiveDriverComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveDriverRoutingModule
  ]
})
export class ReactiveDriverModule { }
