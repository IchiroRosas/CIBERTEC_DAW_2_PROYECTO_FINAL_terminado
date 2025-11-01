import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent
  },
    {
      path: 'registrar',
      component: RegistrarProductoComponent
    },
    {
      path:'actualizar/:id',
      component: ActualizarProductoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
