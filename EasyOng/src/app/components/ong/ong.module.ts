import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from './../header/header.module';
import { OngPageRoutingModule } from './ong-routing.module';
import { OngPage } from './ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [OngPage]
})
export class OngPageModule {}
