import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { OngRepository } from './../../repositories/ong.service.repository';
import { ToastService } from './../../services/toast.service';

declare let L: any;

/* eslint-disable @typescript-eslint/naming-convention */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    public form: FormGroup;
    public step: number;
    public lat: number;
    public lng: number;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly ongRepository: OngRepository,
        private readonly route: Router,
        private readonly toast: ToastService,
        public loadingController: LoadingController,
        private geoLocation: Geolocation
    ) {}

    public ngOnInit(): void {
        this.createForm();

        this.geoLocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.defineLatLng(this.lat, this.lng);

            const myLatlng = { lat: this.lat, lng: this.lng };

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
        });
    }

    public createForm(): void {
        this.form = this.formBuilder.group({
            ong_name: ['', [Validators.required]],
            ong_cnpj_cpf: ['', [Validators.required]],
            ong_latitude: ['', [Validators.required]],
            ong_longitude: ['', [Validators.required]],
            ong_responsavel: ['', [Validators.required]],
            ong_email: ['', [Validators.required, Validators.email]],
            ong_senha: ['', [Validators.required]],
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
        this.ongRepository.create(this.form.value)
        .pipe(take(1))
        .subscribe(
            ()=> {
                this.toast.displayToast('Cadastro efetuado com sucesso.');
                this.route.navigate(['']);
            },
            ()=> this.toast.displayToast('falhou')
        );
    }
}
