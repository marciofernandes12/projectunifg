import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { OngRepository } from './../../repositories/ong.service.repository';

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
    public locations = [
        { lat: -8.1920063, lng: -34.917070 },
        { lat: -8.1920062, lng: -34.917171 },
        { lat: -8.1920061, lng: -34.917272 },
        { lat: -8.1920060, lng: -34.917373 },
        { lat: -8.1920059, lng: -34.917474 },
        { lat: -8.1920058, lng: -34.917575 },
        { lat: -8.1920057, lng: -34.917676 },
        { lat: -8.1920056, lng: -34.917777 },
        { lat: -8.1920055, lng: -34.917978 },
        { lat: -8.1920054, lng: -34.917879 },
        { lat: -8.1920053, lng: -34.918080 },
        { lat: -8.1920052, lng: -34.918181 },
        { lat: -8.1920051, lng: -34.918282 },
        { lat: -8.1920050, lng: -34.918383 },
        { lat: -8.1920049, lng: -34.918484 },
        { lat: -8.1920048, lng: -34.918585 },
      ];

    constructor(
        public ongRepository: OngRepository,
        private geoLocation: Geolocation
    ) {}

    public ngOnInit(): void {
        // this.ongRepository.read()
        //     .pipe(take(1))
        //     .subscribe(
        //         (response: Array<Ong>) => {
        //             const markers  = response.map((ong, index) => [ong.ong_latitude, ong.ong_longitude]);
        //             console.log(markers);

        //             this.loadMap(50.5, 30.5, markers);
        //         }
        //     );
        this.geoLocation
        .getCurrentPosition()
        .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const loader = new Loader({
                apiKey: 'AIzaSyC8gWRFDkGAcwlvGXHm16CZMU0NprfoTZ4'
            });

            loader.load().then(() => {
                console.log('loaded gmaps');

                const location = { lat: this.latitude, lng: this.longitude };
                console.log(location);


                const map = new google.maps.Map(document.getElementById('map'), {
                    center: location,
                    disableDefaultUI: true,
                    zoom: 20,
                });

                const markers = this.locations.map((l, i) => new google.maps.Marker({
                    position: l,
                }));

                new MarkerClusterer({ map, markers });
            });
        })
        .catch((error) => {
            console.log('Error ao buscar localização', error);
        });
    }

}
