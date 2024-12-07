import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value !== null && value.toString().length !== length) {
        return { numberLength: { requiredLength: length, actualLength: value.toString().length } };
      }
      return null;
    };
  }