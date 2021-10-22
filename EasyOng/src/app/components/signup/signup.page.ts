import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { Map, Popup } from 'leaflet';
import { take } from 'rxjs/operators';

import { OngRepository } from './../../repositories/ong.service.repository';

declare let L: any;

/* eslint-disable @typescript-eslint/naming-convention */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  map: Map;
  popup: Popup;
  newMarker: any;
  address: string[];
  latitude;
  longitude;
  dados: any = '';
  mostrar = false;
  numero;
  valor;
  votos = 0;
  estrelas = null;
  nome;
  foto;

  public form: FormGroup;
  public step: number;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly ongRepository: OngRepository,
    private readonly route: Router,

    public loadingController: LoadingController,
    private geoLocation: Geolocation
  ) {}

  public ngOnInit(): void {
    this.step = 1;
    this.createForm();
    console.log(this.step);

    this.geoLocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const myLatlng = { lat: this.latitude, lng: this.longitude };

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
        console.log(marker.getPosition().lat());
        console.log(marker.getPosition().lng());

        map.setCenter(marker.getPosition() as google.maps.LatLng);
      });
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      ong_name: ['', [Validators.required]],
      ong_cnpj_cpf: ['', [Validators.required]],
      ong_cidade: [''],
      ong_bairro: [''],
      ong_estado: [''],
      ong_rua: [''],
      ong_numero: [''],
      ong_complemento: [''],
      ong_latitude: [''],
      ong_longitude: [''],
      ong_telefone: ['', [Validators.required]],
      ong_responsavel: ['', [Validators.required]],
      ong_descricao: [''],
      ong_email: ['', [Validators.required]],
      ong_senha: ['', [Validators.required]],
    });
  }

  public next(): void {
    this.ongRepository
      .create(this.form.value)
      .pipe(take(1))
      .subscribe((createResponse) => {
        console.log(createResponse);
      });
    console.log(this.form.value);
    this.step = this.step + 1;
  }

  public back(): void {
    this.route.navigate(['']);
  }
}
