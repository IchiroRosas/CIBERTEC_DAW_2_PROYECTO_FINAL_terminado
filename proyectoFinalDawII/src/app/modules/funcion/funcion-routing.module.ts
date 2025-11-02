import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionComponent } from './funcion.component';
import { RegistrarFuncionComponent } from './components/registrar-funcion/registrar-funcion.component';
import { ActualizarFuncionComponent } from './components/actualizar-funcion/actualizar-funcion.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionComponent
  },
  {
    path: 'registrar',
    component: RegistrarFuncionComponent
  },
  {
    path: 'actualizar/:id',
    component: ActualizarFuncionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionRoutingModule { }
