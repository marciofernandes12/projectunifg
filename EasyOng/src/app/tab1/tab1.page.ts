import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { Map, Popup } from 'leaflet';

declare let L: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
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

  constructor(
    private geolocation: Geolocation,
    public loadingController: LoadingController,
    private geoLocation: Geolocation,
    // private ipeteservices: IpetService,
    private toastCtrl: ToastController
  ) {}

  public ionViewWillEnter(): void {
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

  // onMapClick(e) {

  //   if (this.newMarker === undefined) {
  //     this.newMarker = marker([e.latlng.lat, e.latlng.lng], {
  //       draggable: false
  //     }).addTo(this.map);
  //     this.latitude = e.latlng.lat;
  //     this.longitude = e.latlng.lng;
  //   } else {
  //     console.log(this.newMarker);
  //     this.map.removeLayer(this.newMarker);
  //     this.newMarker = marker([e.latlng.lat, e.latlng.lng], {
  //       draggable: false
  //     }).addTo(this.map);
  //     this.latitude = e.latlng.lat;
  //     this.longitude = e.latlng.lng;
  //   }

  // }

  public loadMap(lat, long): void {
    if (!this.map) {
      this.map = new Map('mapId2').setView([lat, long], 15);

      const leafIcon = L.Icon.extend({
        options: {
          iconSize: [60, 95],
          iconAnchor: [22, 94],
          popupAnchor: [7, -76],
        },
      });

      const greenIcon = new leafIcon({
        iconUrl: '../../assets/icon/heart.png',
      });
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

  // async locatePosition() {

  //   const loading = await this.loadingController.create({
  //     cssClass: 'my-custom-class',
  //     message: 'Buscando localização atual...',
  //     duration: 3000
  //   });
  //   await loading.present();
  //   this.map.locate({ setView: true }).on('locationfound', (e: any) => {
  //     if (this.newMarker === undefined) {
  //       this.newMarker = marker([e.latitude, e.longitude], {
  //         draggable: true
  //       }).addTo(this.map);
  //       this.latitude = e.latitude;
  //       this.longitude = e.longitude;
  //     } else {
  //       this.map.removeLayer(this.newMarker);
  //       this.newMarker = marker([e.latitude, e.longitude], {
  //         draggable: true
  //       }).addTo(this.map);
  //       this.latitude = e.latitude;
  //       this.longitude = e.longitude;
  //     }
  //   });
  // }

  async buscarPorTipos(tipo) {
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Buscando localizações...',
    //   duration: 3000
    // });
    // await loading.present();
    // this.ipeteservices.buscarPorTipos(tipo.detail.value)
    //   .then((response) => {
    //     if (response != false) {
    //       this.map.removeLayer(this.newMarker);
    //       const leafIcon = L.Icon.extend({
    //         options: {
    //           iconSize: [60, 95],
    //           iconAnchor: [22, 94],
    //           popupAnchor: [7, -76]
    //         }
    //       });
    //       const greenIcon = new leafIcon({ iconUrl: '../../assets/img/boneco.png' });
    //       this.newMarker = marker([this.latitude, this.longitude], {
    //         draggable: false,
    //         icon: greenIcon
    //       }).addTo(this.map).bindPopup('Você').openPopup();
    //       const leafIcon = L.Icon.extend({
    //         options: {
    //           iconSize: [30, 70],
    //           iconAnchor: [22, 94],
    //           popupAnchor: [-5, -76]
    //         }
    //       });
    //       const greenIcon = new leafIcon({ iconUrl: '../../assets/img/'+tipo.detail.value+'.png' });
    //       this.dados = response;
    //       this.dados.forEach(element => {
    //         console.log(element);
    //         const popupLink = '<h2>'+element.nome_usuario+'</h2>'+'Votos: '+element.votos+'<br>Media de 0 a 5:  '+element.estrelas+
    //         '<br><a target='_blank' href='https://api.whatsapp.com/send?phone=55'+element.num_usuario+
    //        '' data-merchId='200'><button color='success'>Whatsapp</button></a><button onClick='conversar('
    //        +element.id_usuario+',\&quot;'+element.nome_usuario+'\&quot;)'>Chat</button>'
    //         this.newMarker = marker([element.lat_usuario, element.long_usuario], {
    //           draggable: false,
    //           icon: greenIcon,
    //         }).addTo(this.map).bindPopup(popupLink).openPopup();
    //       });
    //     }else {
    //       this.map.removeLayer(this.newMarker);
    //       const leafIcon = L.Icon.extend({
    //         options: {
    //           iconSize: [60, 95],
    //           iconAnchor: [22, 94],
    //           popupAnchor: [7, -76]
    //         }
    //       });
    //       const greenIcon = new leafIcon({ iconUrl: '../../assets/img/boneco.png' });
    //       this.newMarker = marker([this.latitude, this.longitude], {
    //         draggable: false,
    //         icon: greenIcon
    //       }).addTo(this.map).bindPopup('Você').openPopup();
    //       const mensagem = 'Nenhum '+ tipo.detail.value+ ' encontrado!';
    //       this.alertaDados(mensagem);
    //     }
    //   })
    //   .catch((erro) => {
    //     console.error(erro);
    //   });
  }

  // async alertaDados(mensagem: string) {
  //   const toast = await this.toastCtrl.create({
  //     message: mensagem,
  //     duration: 2000,
  //     position: 'top'
  //   });

  //   toast.present();
  // }
}
