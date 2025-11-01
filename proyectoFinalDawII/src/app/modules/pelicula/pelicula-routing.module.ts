import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './pelicula.component';
import { ActualizarPeliculaComponent } from './components/actualizar-pelicula/actualizar-pelicula.component';
import { RegistrarPeliculaComponent } from './components/registrar-pelicula/registrar-pelicula.component';

const routes: Routes = [
  {
      path: '',
      component: PeliculaComponent
    },
    {
      path: 'registrar',
      component: RegistrarPeliculaComponent
    },
    {
      path:'actualizar/:id',
      component: ActualizarPeliculaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
