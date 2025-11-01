import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  goHome(event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigate(['/principal']);
  }

  navigateTo(path: string, event?: Event): void {
    if (event) event.preventDefault();
    this.router.navigate([path]);
  }

  isLoginRoute(): boolean {
    return this.router.url.includes('/login');
  }

  isRegisterRoute(): boolean {
    return this.router.url.includes('/register');
  }

  preguntaCerrarSesion(): void {
    const confirmar = confirm('¿Seguro que deseas cerrar sesión?');
    if (confirmar) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}