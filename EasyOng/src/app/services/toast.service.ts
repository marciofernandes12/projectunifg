// loader.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(public toastController: ToastController) {}

    public displayToast() {
        this.toastController
            .create({
                header: 'Sucesso!',
                message: 'Cadastro efetuado com sucesso.',
                position: 'middle',
                // color: 'success',
                duration: 4000
            })
            .then((toast) => {
                toast.present();
            });
    }
}
