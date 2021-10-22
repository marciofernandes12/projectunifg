import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from './../header/header.module';
import { BuscaPageRoutingModule } from './busca-routing.module';
import { BuscaPage } from './busca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [BuscaPage]
})
export class BuscaPageModule {}
