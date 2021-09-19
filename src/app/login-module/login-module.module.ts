import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModuleModule { }
