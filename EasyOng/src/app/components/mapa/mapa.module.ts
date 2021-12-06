import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from './../header/header.module';
import { MapaPageRoutingModule } from './mapa-routing.module';
import { MapaPage } from './mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
