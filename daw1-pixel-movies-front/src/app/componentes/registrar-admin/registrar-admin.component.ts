import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrador } from '../../models/administrador';
import { AdministradorService } from '../../services/administrador.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-admin.component.html',
  styleUrl: './registrar-admin.component.css'
})
export class RegistrarAdminComponent {

  nuevoAdmin: Administrador = {
    idUsuario: 0,
    nombreUsuarioReal: '',
    nombreUsuario: '',
    contrasenia: ''
  };

  constructor(private adminService: AdministradorService, private router: Router) { }

  registrarAdmin() {
    console.log("Admin creado con exito antes: ", this.nuevoAdmin);
    this.adminService.registrarNuevoAdmin(this.nuevoAdmin).subscribe(response => {
      console.log("Admin creado con exito: ", response);
      this.nuevoAdmin = {
        idUsuario: 0, nombreUsuarioReal: "", nombreUsuario: "", contrasenia: ""
      };
      this.router.navigate(['/']);
    },
    error => {
      console.error('Error al registrar nuevo admin:', error);
      }
    );
  }

  volverAlogin(): void {
    this.router.navigate(['/']);
  }
}
