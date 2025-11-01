import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdministradorService } from '../../services/administrador.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nombreUsuario: string = '';
  contrasenia: string = '';
  loginError: boolean = false;
  logoutSuccess: boolean = false;

  constructor(private adminService: AdministradorService, private router: Router) {}

  login(): void {
    this.adminService.loginAdministrador({
      nombreUsuario: this.nombreUsuario, contrasenia: this.contrasenia}as any).subscribe({
      next: (admin) => {
        console.log('Login exitoso:', admin);
        this.loginError = false;
        this.router.navigate(['/PrincipalComponent']);
      },
      error: () => {
        this.loginError = true;
      }
    });
  }

  aRegistrarNuevoAdmin(): void {
    this.router.navigate(['/registrarAdmin'])
  }
}
