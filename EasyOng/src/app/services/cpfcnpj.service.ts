// loader.service.ts
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@Injectable({
    providedIn: 'root',
})
export class CpfCpjnService {
    constructor(public loadingController: LoadingController) {}

    public validaCpfCnpj(val: string) {
        if (val.length === 14) {
            return cpf.isValid(val);
        } else if (val.length === 18) {
            return cnpj.isValid(val);
        } else {
            return false;
        }
    }
}
