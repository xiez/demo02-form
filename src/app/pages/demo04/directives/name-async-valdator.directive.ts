import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[appNameAsyncValdator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => NameAsyncValdatorDirective),
    multi: true
  }]
})
export class NameAsyncValdatorDirective implements AsyncValidator {

  constructor() { }
  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const { value }: { value: string } = control;
    if (value === 'abcdef') {
      return of({
        exists: true
      }).pipe(
        delay(2000)
      );
    }
    return of(null);
  }
  registerOnValidatorChange?(fn: () => void): void {
  }

}
