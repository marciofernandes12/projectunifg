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
  // {
  //   path: '',
  //   loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupPageModule)
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
