// loader.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(public toastController: ToastController) {}

    public displayToast(msg: string) {
        this.toastController
            .create({
                // header: 'Sucesso!',
                message: msg,
                position: 'middle',
                // color: 'success',
                duration: 4000
            })
            .then((toast) => {
                toast.present();
            });
    }
}
