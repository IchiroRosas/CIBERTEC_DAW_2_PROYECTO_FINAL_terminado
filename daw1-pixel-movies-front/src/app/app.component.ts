import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daw1-pixel-movies-front';

  constructor(public router: Router) { }

  isLoginRoute(): boolean {
    return this.router.url === '/';
  }

  isRegisterRoute(): boolean{
   return this.router.url === '/registrarAdmin' 
  }

  preguntaCerrarSesion(): void {
    if (confirm('¿Cerrar sesión?')) {
      this.router.navigate([("/")])
    }
  }

}
