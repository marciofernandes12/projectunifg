import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    latitude: any = '';
    longitude: any = '';
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

    public loadingController: LoadingController,
    private geoLocation: Geolocation,
  ) { }

  public ngOnInit(): void {
    this.step = 1;
    this.createForm();
    console.log(this.step);


        this.geoLocation
        .getCurrentPosition()
        .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.loadMap(this.latitude, this.longitude);
            // this.map.on('dblclick', (e) => { this.onMapClick(e); });
        })
        .catch((error) => {
            console.log('Error ao buscar localização', error);
        });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      ong_name: ['',[Validators.required]],
      ong_cnpj_cpf: ['',[Validators.required]],
      ong_cidade: [''],
      ong_bairro: [''],
      ong_estado: [''],
      ong_rua: [''],
      ong_numero: [''],
      ong_complemento: [''],
      ong_latitude: [''],
      ong_longitude: [''],
      ong_telefone: ['',[Validators.required]],
      ong_responsavel: ['',[Validators.required]],
      ong_descricao: [''],
      ong_email: ['',[Validators.required]],
      ong_senha: ['',[Validators.required]],
    });
  }

  public next(): void {
    this.ongRepository.create(this.form.value)
      .pipe(take(1))
      .subscribe((createResponse)=>{
        console.log(createResponse);
      });
    console.log(this.form.value);
    this.step = this.step+1;
  }

  public back(): void {
    console.log(this.form.value);
    this.step = this.step-1;
  }

  public loadMap(lat, long): void {
    if (!this.map) {
    this.map = new Map('opa').setView([lat, long], 15);

    const leafIcon = L.Icon.extend({
        options: {
        iconSize: [60, 95],
        iconAnchor: [22, 94],
        popupAnchor: [7, -76],
        },
    });

    const greenIcon = new leafIcon({
        iconUrl: '../../../assets/icon/heart.png',
    });
    // this.newMarker = m.map((coords)=>{


    //     console.log(coords);


    //     return L.marker(coords, {
    //         draggable: false,
    //         icon: greenIcon,
    //     })
    //     .addTo(this.map)
    //     .bindPopup('Você')
    //     .openPopup();

    // });

    this.newMarker = L.marker([lat, long], {
        draggable: false,
        icon: greenIcon,
    })
        .addTo(this.map)
        .bindPopup('Você')
        .openPopup();
    this.latitude = lat;
    this.longitude = long;
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {}
    ).addTo(this.map);
    Map.on('locationfound', this.loadMap);
    }
}

}
