import { Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from "./componentes/login/login.component";

import { ListarSalasComponent } from './componentes/listar-salas/listar-salas.component';
import { RegistrarSalaComponent } from './componentes/registrar-sala/registrar-sala.component';
import { ActualizarSalaComponent } from './componentes/actualizar-sala/actualizar-sala.component';

/*---------------------*/

import { ListarPeliculasComponent } from './componentes/listar-peliculas/listar-peliculas.component'
import { RegistrarPeliculaComponent } from './componentes/registrar-pelicula/registrar-pelicula.component';
import { ActualizarPeliculaComponent } from './componentes/actualizar-pelicula/actualizar-pelicula.component';

/*---------------------*/

import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component'
import { RegistrarProductoComponent } from './componentes/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './componentes/actualizar-producto/actualizar-producto.component';

/*---------------------*/

import { ListarFuncionesComponent } from './componentes/listar-funciones/listar-funciones.component';
import { RegistrarFuncionComponent } from './componentes/registrar-funcion/registrar-funcion.component';
import { ActualizarFuncionComponent } from './componentes/actualizar-funcion/actualizar-funcion.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'PrincipalComponent', component: PrincipalComponent},
    {path: 'LoginComponent', component: LoginComponent},
    {path: 'registrarAdmin', component: RegistrarAdminComponent},
    {path: 'listadoSalas', component: ListarSalasComponent},
    {path: 'registroSala', component: RegistrarSalaComponent},
    {path: 'actualizarSala/:id', component: ActualizarSalaComponent},
    {path: 'listadoPeliculas', component: ListarPeliculasComponent},
    {path: 'registroPelicula', component: RegistrarPeliculaComponent},
    {path: 'actualizarPelicula/:id', component: ActualizarPeliculaComponent},
    {path: 'listadoProductos', component: ListarProductosComponent},
    {path: 'registroProducto', component: RegistrarProductoComponent},
    {path: 'actualizarProducto/:id', component: ActualizarProductoComponent},
    {path: 'listadoFunciones', component: ListarFuncionesComponent},
    {path: 'registroFuncion', component: RegistrarFuncionComponent},
    {path: 'actualizarFuncion/:id', component: ActualizarFuncionComponent},

    {path: '**', redirectTo: '', pathMatch: 'full'} 
];
