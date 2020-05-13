import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }


  nameExistsValdatorAsync(value: string) {
    return timer(1000).pipe(
      map(() => {
        if (value === 'abcd') {
          return {
            nameExists: true
          };
        } else {
          return null;
        }
      })
    );
  }


}
