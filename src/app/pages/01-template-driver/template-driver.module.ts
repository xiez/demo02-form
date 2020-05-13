import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateDriverComponent } from './template-driver.component';
import { AgeGreaterthanValidatorDirective } from './directives/age-greaterthan-validator.directive';
import { NameExistsAsyncValidatorDirective } from './directives/name-exists-async-validator.directive';


@NgModule({
  declarations: [TemplateDriverComponent, AgeGreaterthanValidatorDirective, NameExistsAsyncValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TemplateDriverModule { }
