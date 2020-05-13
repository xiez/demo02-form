import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-driver2',
  templateUrl: './reactive-driver2.component.html',
  styleUrls: ['./reactive-driver2.component.scss']
})
export class ReactiveDriver2Component implements OnInit {

  fg: FormGroup;

  get nameControl() {
    return this.fg.get('name');
  }

  get array() {
    return this.fg.get('array') as FormArray;
  }

  constructor(public fb: FormBuilder) {
    this.fg = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)], [this.nameExistsAsync]],
      // name: this.fb.control({ value: 'name', disabled: true }),
      age: [1, [Validators.min(5)]],
      array: this.fb.array([], [this.numSumValdator], [])
    });
  }

  nameExistsAsync(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
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


  numSumValdator(control: FormArray): ValidationErrors {
    const { value }: { value: { num: number }[] } = control;
    const result = value.reduce((prev, current) => {
      // const { value }: { value: { num: number } } = current;
      // const { num }: { num: number } = current;
      // if (current.num > 0) {
      return prev + current.num;
      // }
      // return prev;
    }, 0);

    if (result > 5) {
      return {
        numSum: true
      };
    }
    return null;
  }


  // createFormGroup() {
  //   return this.fb.group({
  //     name: ['', [Validators.required]]
  //   });
  // }

  add() {
    this.array.push(
      this.fb.group({
        num: 1
      })
    );
  }

  ngOnInit(): void {
  }

}
