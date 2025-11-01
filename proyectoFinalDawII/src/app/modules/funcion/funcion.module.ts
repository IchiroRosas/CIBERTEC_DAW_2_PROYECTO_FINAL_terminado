import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionRoutingModule } from './funcion-routing.module';
import { RegistrarFuncionComponent } from './components/registrar-funcion/registrar-funcion.component';
import { ActualizarFuncionComponent } from './components/actualizar-funcion/actualizar-funcion.component';


@NgModule({
  declarations: [
    RegistrarFuncionComponent,
    ActualizarFuncionComponent
  ],
  imports: [
    CommonModule,
    FuncionRoutingModule
  ]
})
export class FuncionModule { }
