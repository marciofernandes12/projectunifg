/* eslint-disable radix */
import { AbstractControl } from '@angular/forms';
import { cnpj } from 'cpf-cnpj-validator';

export const validateCnpj = (control: AbstractControl): { [key: string]: boolean } | null => {
  if(control.value &&  !cnpj.isValid(control.value)){
    return {cnpjInvalid: true};
  }
  return null;
};
