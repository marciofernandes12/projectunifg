import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaSenhaPage } from './recupera-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaSenhaPageRoutingModule {}
