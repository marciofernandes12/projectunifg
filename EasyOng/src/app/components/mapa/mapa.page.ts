import { OngService } from './../../services/ong.service';
import { Ong } from './../../models/ong.model';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { take } from 'rxjs/operators';

import { OngRepository } from './../../repositories/ong.service.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

    title = 'google-maps';

    public latitude;
    public longitude;
    public map: google.maps.Map;

    constructor(
        public ongRepository: OngRepository,
        public ongService: OngService,
        private geoLocation: Geolocation,
        private router: Router,
    ) {}

    public ngOnInit(): void {
        this.getLocation();
    }

    public getOngs(): void {

        this.ongRepository.read()
            .pipe(take(1))
            .subscribe(
                (response: Array<Ong>) => {
                    const loader = new Loader({
                        apiKey: ''
                    });

                    loader.load().then(() => {
                        const location = { lat: this.latitude, lng: this.longitude };
                        const map = new google.maps.Map(document.getElementById('map'), {
                            center: location,
                            disableDefaultUI: true,
                            zoom: 15,
                        });

                        const markers = response.map((l, i) => {
                            const marker = new google.maps.Marker({
                                position: {lat: +l.ong_latitude, lng: +l.ong_longitude},
                            });
                            const infowindow = new google.maps.InfoWindow({
                                content: `
                                <div id="box" style="height: 20px;width: 100px; color: #264787; ">
                                    ${l.ong_name}    
                                </div>`,
                            });

                            google.maps.event.addListener(infowindow, 'domready', () => {
                                const clickableItem = document.getElementById('box');
                                clickableItem.addEventListener('click', () => {
                                    console.log(l);
                                    this.goToOng(l);
                                });
                              });

                            marker.addListener('click', () => {
                                infowindow.open(marker.get('map'), marker);
                            });

                            return marker;
                        });
                        new MarkerClusterer({ map, markers });
                    });
                }
            );
    }

    public getLocation(): void {

        this.geoLocation
        .getCurrentPosition()
        .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.getOngs();
        })
        .catch((error) => {
            console.log('Error ao buscar localização', error);
        });
    }

    public goToOng(ong: Ong): void {
        this.ongService.setOng(ong);
        this.router.navigate(['/ong']);
    }
}
