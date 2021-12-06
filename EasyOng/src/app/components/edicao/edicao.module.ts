import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoPageRoutingModule } from './edicao-routing.module';

import { EdicaoPage } from './edicao.page';
import { TextMaskModule } from 'angular2-text-mask';
import { BrMaskerModule } from 'br-mask';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    EdicaoPageRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrMaskerModule,
    HeaderPageModule,
  ],
  declarations: [EdicaoPage]
})
export class EdicaoPageModule {}
