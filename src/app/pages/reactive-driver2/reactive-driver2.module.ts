import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDriver2RoutingModule } from './reactive-driver2-routing.module';
import { ReactiveDriver2Component } from './reactive-driver2.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactiveDriver2Component, FormItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveDriver2RoutingModule
  ]
})
export class ReactiveDriver2Module { }
