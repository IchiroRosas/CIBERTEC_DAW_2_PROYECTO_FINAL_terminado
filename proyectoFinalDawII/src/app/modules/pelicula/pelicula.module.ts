import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { RegistrarPeliculaComponent } from './components/registrar-pelicula/registrar-pelicula.component';
import { ActualizarPeliculaComponent } from './components/actualizar-pelicula/actualizar-pelicula.component';
import { EliminarPeliculaComponent } from './components/eliminar-pelicula/eliminar-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistrarPeliculaComponent,
    ActualizarPeliculaComponent,
    EliminarPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class PeliculaModule { }
