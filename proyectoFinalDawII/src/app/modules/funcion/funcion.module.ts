import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionRoutingModule } from './funcion-routing.module';
import { RegistrarFuncionComponent } from './components/registrar-funcion/registrar-funcion.component';
import { ActualizarFuncionComponent } from './components/actualizar-funcion/actualizar-funcion.component';
import { EliminarFuncionComponent } from './components/eliminar-funcion/eliminar-funcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    RegistrarFuncionComponent,
    ActualizarFuncionComponent,
    EliminarFuncionComponent
  ],
  imports: [
    CommonModule,
    FuncionRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class FuncionModule { }
