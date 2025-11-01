import { Component } from '@angular/core';
import { Administrador } from '../../dto/admin-dto';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent {
 adminForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(1)]],
      contrasenia: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  registrarAdmin(): void {
    if (this.adminForm.invalid) return;

    const nuevoAdmin: Administrador = this.adminForm.value;
    console.log('Admin antes de enviar:', nuevoAdmin);

    this.loginService.registrarNuevoAdmin(nuevoAdmin).subscribe({
      next: (response) => {
        console.log('Admin creado con éxito:', response);
        this.adminForm.reset();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al registrar nuevo admin:', error);
      }
    });
  }

  volverAlogin(): void {
    this.adminForm.reset();
    this.router.navigate(['/']);
  }

  get f() {
    return this.adminForm.controls;
  }
}
