import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';
import { HeaderPage } from './header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule
  ],
  declarations: [HeaderPage],
  exports: [HeaderPage]
})
export class HeaderPageModule {}
