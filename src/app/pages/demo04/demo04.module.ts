import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo04RoutingModule } from './demo04-routing.module';
import { Demo04Component } from './demo04.component';
import { FormsModule } from '@angular/forms';
import { AgeValidatorDirective } from './directives/age-validator.directive';
import { NameAsyncValdatorDirective } from './directives/name-async-valdator.directive';


@NgModule({
  declarations: [Demo04Component, AgeValidatorDirective, NameAsyncValdatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    Demo04RoutingModule
  ]
})
export class Demo04Module { }
