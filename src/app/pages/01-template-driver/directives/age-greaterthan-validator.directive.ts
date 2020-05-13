import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeGreaterthanValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeGreaterthanValidatorDirective),
      multi: true
    }
  ]
})
export class AgeGreaterthanValidatorDirective implements Validator {


  @Input('appAgeGreaterthanValidator') greaterthen: number;

  constructor() {
  }

  change: () => void;

  validate(control: AbstractControl): ValidationErrors {
    const { value }: { value: number } = control;
    // this.change();
    if (value > this.greaterthen) {
      return {
        greaterThen: true,
      };
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }

}
