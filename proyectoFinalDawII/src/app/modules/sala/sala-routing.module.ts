import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaComponent } from './sala.component';
import { RegistrarSalaComponent } from './components/registrar-sala/registrar-sala.component';
import { ActualizarSalaComponent } from './components/actualizar-sala/actualizar-sala.component';

const routes: Routes = [
  {
    path: '',
    component: SalaComponent
  },
  {
    path: 'registrar',
    component: RegistrarSalaComponent
  },
  {
    path: 'actualizar/:id',
    component: ActualizarSalaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaRoutingModule { }
