import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextMaskModule } from 'angular2-text-mask';
import { BrMaskerModule } from 'br-mask';

import { HeaderPageModule } from './../header/header.module';
import { RecuperaSenhaPageRoutingModule } from './recupera-senha-routing.module';
import { RecuperaSenhaPage } from './recupera-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaSenhaPageRoutingModule,
    HeaderPageModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrMaskerModule,
  ],
  declarations: [RecuperaSenhaPage]
})
export class RecuperaSenhaPageModule {}
