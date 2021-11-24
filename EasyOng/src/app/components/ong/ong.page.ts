import { Ong } from './../../models/ong.model';
import { OngService } from './../../services/ong.service';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OngRepository } from 'src/app/repositories/ong.service.repository';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.page.html',
  styleUrls: ['./ong.page.scss'],
})
export class OngPage implements OnInit {

    title = 'google-maps';

    public latitude;
    public longitude;
    public ong: Ong;

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
        public ongService: OngService,
    ) {}

    public ngOnInit(): void {

        this.ong = this.ongService.getOng();

        const loader = new Loader({
            apiKey: ''
        });

        loader.load().then(() => {

            const location = { lat: +this.ong.ong_latitude, lng: +this.ong.ong_longitude };

            const map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                disableDefaultUI: true,
                zoom: 20,
            });

            const marker = new google.maps.Marker({
                position: location,
                map,
            });
        });

    }

}
