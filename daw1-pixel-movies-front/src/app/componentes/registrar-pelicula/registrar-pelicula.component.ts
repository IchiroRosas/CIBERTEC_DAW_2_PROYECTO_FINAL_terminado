import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-registrar-pelicula',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-pelicula.component.html',
  styleUrl: './registrar-pelicula.component.css'
})
export class RegistrarPeliculaComponent {

  nuevaPelicula: Pelicula  = {
    idpelicula: 0,
    nombrepelicula: '',
    directorpelicula: '',
    generopelicula: '',
    duracionpelicula: '',
    idiomapelicula: '',
    clasificacionpelicula: ''
  }

  constructor(private peliculaService: PeliculaService, private router: Router) {}

  registrarPelicula() {
    this.peliculaService.registrarPelicula(this.nuevaPelicula).subscribe(response => {
      console.log('Pelicula registrada con éxito:', response);
      this.nuevaPelicula = {
        idpelicula: 0, nombrepelicula: '', directorpelicula: '', generopelicula: '', duracionpelicula: '', idiomapelicula: '', clasificacionpelicula: ''
      };
      this.router.navigate(['/listadoPeliculas']);
    },
      error => {
      console.error('Error al registrar la pelicula:', error);
      }
    );
  }
  volverListado(): void {
    this.router.navigate(['/listadoPeliculas']);
  }

}
