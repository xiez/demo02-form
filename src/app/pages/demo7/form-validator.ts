import { AbstractControl, ValidatorFn } from '@angular/forms';

function nameExists(getAllMenusFn: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    const getAllMenus = getAllMenusFn();
    const list = getAllMenus();
    if (list !== undefined && list.includes(control.value)) {
      return { nameexists: true};
    }
    return null;
  };
}

export {
  nameExists,
};
