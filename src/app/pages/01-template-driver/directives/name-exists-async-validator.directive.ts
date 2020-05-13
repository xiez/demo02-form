import { Directive, Input, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidatorService } from '../services/validator.service';

@Directive({
  selector: '[appNameExistsAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => NameExistsAsyncValidatorDirective),
      multi: true
    }
  ]
})
export class NameExistsAsyncValidatorDirective implements AsyncValidator {

  change: () => void;

  constructor(private validatorService: ValidatorService) { }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const { value } = control;
    return this.validatorService.nameExistsValdatorAsync(value);
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }

}
