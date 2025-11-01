import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'salas',
    loadChildren: () => import('./modules/sala/sala.module').then(m => m.SalaModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./modules/pelicula/pelicula.module').then(m => m.PeliculaModule)
  },
  {
    path: 'funciones',
    loadChildren: () => import('./modules/funcion/funcion.module').then(m => m.FuncionModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
