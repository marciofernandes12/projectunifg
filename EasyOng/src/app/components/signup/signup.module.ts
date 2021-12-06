import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { TextMaskModule } from 'angular2-text-mask';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrMaskerModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
