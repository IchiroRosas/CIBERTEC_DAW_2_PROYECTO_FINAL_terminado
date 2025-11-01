import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { RegistrarSalaComponent } from './components/registrar-sala/registrar-sala.component';
import { ActualizarSalaComponent } from './components/actualizar-sala/actualizar-sala.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EliminarSalaComponent } from './components/eliminar-sala/eliminar-sala.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    RegistrarSalaComponent,
    ActualizarSalaComponent,
    EliminarSalaComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SalaModule { }
