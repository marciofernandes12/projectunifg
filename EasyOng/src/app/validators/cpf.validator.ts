/* eslint-disable radix */
import { AbstractControl, FormControl } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

export const validateCpf = (control: AbstractControl): { [key: string]: boolean } | null => {
  if(control.value && !cpf.isValid(control.value)){
    return {cpfInvalid: true};
  }
  return null;
};
