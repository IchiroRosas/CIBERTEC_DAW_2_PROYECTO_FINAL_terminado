import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PrincipalComponent } from '../principal/principal.component';
import { RegistrarAdminComponent } from './components/registrar-admin/registrar-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'registrarAdmin',
    component: RegistrarAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
