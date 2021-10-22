import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from './../header/header.module';
import { RecuperaSenhaPageRoutingModule } from './recupera-senha-routing.module';
import { RecuperaSenhaPage } from './recupera-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaSenhaPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [RecuperaSenhaPage]
})
export class RecuperaSenhaPageModule {}
