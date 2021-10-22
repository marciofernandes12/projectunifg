import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./components/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./components/busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'talk',
    loadChildren: () => import('./components/indicacao/indicacao.module').then( m => m.IndicacaoPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./components/recupera-senha/recupera-senha.module').then( m => m.RecuperaSenhaPageModule)
  },  {
    path: 'ong',
    loadChildren: () => import('./components/ong/ong.module').then( m => m.OngPageModule)
  },





  // {
  //   path: '',
  //   loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'signin',
  //   loadChildren: () => import('./components/signin/signin.module').then( m => m.SigninPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  // }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
