import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginHeaderComponent
    ],
  exports: [
    LoginComponent
    ]
})
export class AuthModule { }
