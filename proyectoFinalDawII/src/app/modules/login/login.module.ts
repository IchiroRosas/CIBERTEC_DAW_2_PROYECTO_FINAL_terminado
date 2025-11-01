import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegistrarAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarAdminComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
]
})
export class LoginModule { }
