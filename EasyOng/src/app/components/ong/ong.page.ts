import { Router } from '@angular/router';
import { Ong } from './../../models/ong.model';
import { OngService } from './../../services/ong.service';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OngRepository } from 'src/app/repositories/ong.service.repository';
import { take } from 'rxjs/operators';
import { interval, timer } from 'rxjs';

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
    public id: string;

    public map: google.maps.Map;

    constructor(
        public ongRepository: OngRepository,
        public ongService: OngService,
        public route: Router,
    ) {}

    public ngOnInit(): void {
        this.ong = this.ongService.getOng();
        this.getOng();
    }

    public loadMap(): void {

        interval(3000)
        .pipe(take(1))
        .subscribe(n => {

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

                new google.maps.Marker({
                    position: location,
                    map,
                });
            });



        });
    }

    public getOng(): void {
        this.ongRepository.readById(this.ong.ong_id).pipe(take(1)).subscribe((searchResponse)=>{
        this.ong = searchResponse;
        this.loadMap();
        });
      }




}
