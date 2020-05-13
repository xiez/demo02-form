import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AgeValidatorDirective),
    multi: true
  }]
})
export class AgeValidatorDirective implements Validator {

  @Input('appAgeValidator') gt: number;
  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const { value }: { value: number } = control;
    if (value < this.gt) {
      return {
        ageGT: true
      };
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {

  }

}
