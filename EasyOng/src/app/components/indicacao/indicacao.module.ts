import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from './../header/header.module';
import { IndicacaoPageRoutingModule } from './indicacao-routing.module';
import { IndicacaoPage } from './indicacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicacaoPageRoutingModule,
    HeaderPageModule,
    ReactiveFormsModule
  ],
  declarations: [IndicacaoPage]
})
export class IndicacaoPageModule {}
