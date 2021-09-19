import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeResolver } from './home.resolve';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { data: HomeResolver },
    children: [
      // {
      //   path: 'new-user',
      //   component: CreateUserComponent
      // }
    ]
  },
  {
    path: 'new-user',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
