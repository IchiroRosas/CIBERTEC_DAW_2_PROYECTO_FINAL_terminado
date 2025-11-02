import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm!: FormGroup;
  loginError = false;
  logoutSuccess = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Definimos el FormGroup con validaciones
    this.loginForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) return; // Evita enviar si el formulario no es válido

    const credenciales = this.loginForm.value;

    this.loginService.loginAdministrador(credenciales).subscribe({
      next: (admin) => {
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Hola, ${admin.nombreUsuario}. Has iniciado sesión con éxito.`,
          icon: 'success'
        });
        this.router.navigate(['/principal']);
      },
      error: () => {
        this.loginError = true;
      }
    });
  }

  aRegistrarNuevoAdmin(): void {
    this.router.navigate(['/login/registrarAdmin']);
  }

  get nombreUsuario() { return this.loginForm.get('nombreUsuario'); }
  get contrasenia() { return this.loginForm.get('contrasenia'); }
}
