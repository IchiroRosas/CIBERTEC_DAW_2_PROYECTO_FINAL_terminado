import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-pelicula',
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-pelicula.component.html',
  styleUrl: './actualizar-pelicula.component.css'
})
export class ActualizarPeliculaComponent {

  pelicula: Pelicula  = {
    idpelicula: 0,
    nombrepelicula: '',
    directorpelicula: '',
    generopelicula: '',
    duracionpelicula: '',
    idiomapelicula: '',
    clasificacionpelicula: ''
  }

  constructor (
    private peliculaService:  PeliculaService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.peliculaService.obtenerPeliculaPorId(id).subscribe({
      next: data => this.pelicula = data,
      error: err => console.error('Error al obtener pelicula:', err)
    });
  }

  actualizarPelicula(): void {
    this.peliculaService.actualizarPelicula(this.pelicula).subscribe({
      next: msg => {
        console.log(msg);
        this.router.navigate(['/listadoPeliculas']);
      },
      error: err => console.error('Error al actualizar:', err)
    });
  }

  volverListado(): void {
    this.router.navigate(['/listadoPeliculas']);
  }
}
