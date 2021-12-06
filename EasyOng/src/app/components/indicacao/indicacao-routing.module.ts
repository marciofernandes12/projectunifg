import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicacaoPage } from './indicacao.page';

const routes: Routes = [
  {
    path: '',
    component: IndicacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicacaoPageRoutingModule {}
