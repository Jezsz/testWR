import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent, CreateUserComponent],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModuleModule { }
