import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // redirectTo:'login',
    loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)
  },
  {
    path: 'home-main',
    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
