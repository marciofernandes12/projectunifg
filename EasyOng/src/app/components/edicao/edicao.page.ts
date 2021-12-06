import { Ong } from './../../models/ong.model';
import { OngService } from './../../services/ong.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { OngRepository } from 'src/app/repositories/ong.service.repository';
import { CpfCpjnService } from 'src/app/services/cpfcnpj.service';
import { ToastService } from 'src/app/services/toast.service';
import { validateCnpj } from 'src/app/validators/cnpj.validator';
import { validateCpf } from 'src/app/validators/cpf.validator';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.page.html',
  styleUrls: ['./edicao.page.scss'],
})
export class EdicaoPage implements OnInit {

    public form: FormGroup;
    public step: number;
    public lat: number;
    public lng: number;
    public session: string;
    public hidden: false;
    public id: string;
    public ong: Ong;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly ongRepository: OngRepository,
        private readonly ongService: OngService,
        private readonly route: Router,
        private readonly toast: ToastService,
        public loadingController: LoadingController,
        private geoLocation: Geolocation,
        private cpfCpjnService: CpfCpjnService,
        public alertController: AlertController
    ) {}

    public ngOnInit(): void {
        this.id = localStorage.getItem('ong_id')?localStorage.getItem('ong_id'):'';
        this.ong = this.ongService.getOng();
        this.createForm(this.ong);
        this.setMarker(this.ong);
    }

    public setMarker(ong: Ong): void {

        const myLatlng = { lat: +ong.ong_latitude, lng: +ong.ong_longitude };

        const map = new google.maps.Map(
            document.getElementById('opa') as HTMLElement,
            { zoom: 18, center: myLatlng, disableDefaultUI: true }
        );

        const marker = new google.maps.Marker({
            position: myLatlng,
            map,
            draggable: true,
            title: 'Click to zoom',
        });

        marker.addListener('dragend', () => {
            this.lat = marker.getPosition().lat();
            this.lng = marker.getPosition().lng();
            this.defineLatLng(this.lat, this.lng);

            map.setCenter(marker.getPosition() as google.maps.LatLng);
        });

    }

    public createForm(ong: Ong): void {
        this.form = new FormGroup({
            ong_name: new FormControl(ong.ong_name),
            ong_cnpj_cpf: new FormControl(ong.ong_cnpj_cpf),
            ong_latitude: new FormControl(ong.ong_latitude),
            ong_longitude: new FormControl(ong.ong_longitude),
            ong_responsavel: new FormControl(ong.ong_responsavel),
            ong_email: new FormControl(ong.ong_email),
            hidden: new FormControl(false),
            ong_descricao: new FormControl(ong.ong_descricao),
            ong_telefone: new FormControl(ong.ong_telefone),
        });
    }

    public back(): void {
        this.route.navigate(['']);
    }

    public defineLatLng(lat: number, lng: number): void {
        this.form.controls.ong_latitude.setValue(lat);
        this.form.controls.ong_longitude.setValue(lng);
    }

    public signup(): void {
        this.ongRepository.update(this.form.value, this.id)
        .pipe(take(1))
        .subscribe(
            ()=> {
                this.toast.displayToast('Atualização efetuada com sucesso.');
                this.route.navigate(['']);
            },
            (error)=> {
                this.toast.displayToast(error.error.message);
            }
        );
    }

    public checkType(): void {
        const value = this.form.get('ong_cnpj_cpf').value;
        if(value.length !== 0 && value.length === 11){
            const type = 'CPF';
            this.form.removeControl('ong_cnpj_cpf');
            this.form.addControl('ong_cnpj_cpf', new FormControl(value, [Validators.required, validateCpf]));
        }
        if(value.length !== 0 && value.length === 14){
            const type = 'CNPJ';
            this.form.removeControl('ong_cnpj_cpf');
            this.form.addControl('ong_cnpj_cpf', new FormControl(value, [Validators.required, validateCnpj]));
        }

    }

    public delete(): void {
        this.ongRepository.delete(this.id)
        .pipe(take(1))
        .subscribe(
            ()=> {
                this.toast.displayToast('Sucesso!');
                localStorage.removeItem('ong_id');
                this.route.navigate(['']);
            },
            (error)=> {
                this.toast.displayToast(error.error.message);
            }
        );
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirmação!',
          message: 'Tem certeza que deseja excluir?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Sim',
              handler: () => {
                this.delete();
              }
            }
          ]
        });
        await alert.present();
    }
}
