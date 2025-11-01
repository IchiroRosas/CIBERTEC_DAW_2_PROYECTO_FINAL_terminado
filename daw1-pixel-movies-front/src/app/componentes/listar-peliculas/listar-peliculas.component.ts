import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-peliculas',
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-peliculas.component.html',
  styleUrl: './listar-peliculas.component.css'
})
export class ListarPeliculasComponent {

  peliculas : Pelicula[] = [];
  idiomas: string[] = [];

  constructor(private peliculaService: PeliculaService, private router: Router) {}

  ngOnInit(): void {
    this.peliculaService.listarPeliculas().subscribe(
      data => {
        this.peliculas = data;
        this.idiomas = [...new Set(data.map(p => p.idiomapelicula))];
      }
    );
  }

  irAregistrarPelicula(): void {
    this.router.navigate(['/registroPelicula']);
  }

  irActualizarPelicula(id: number): void {
    this.router.navigate(['/actualizarPelicula', id]);
  }

  eliminarPelicula(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta pelicula?')) {
      this.peliculaService.eliminarPelicula(id).subscribe({
        next: (mensaje) => {
          console.log(mensaje);
          this.peliculaService.listarPeliculas().subscribe(
            data => {
              this.peliculas = data;
            }
          );
        },
        error: (err) => {
          console.error('Error al eliminar la pelicula:', err);
        }
      });
    }
  }

  idiomaSeleccionado: string = '0';

  filtrarPeliculas(): void {
    if (this.idiomaSeleccionado === '0') {
      this.peliculaService.listarPeliculas().subscribe(data => {
        this.peliculas = data;
      });
    } else {
      this.peliculaService.filtrarPelicula(this.idiomaSeleccionado).subscribe(data => {
        this.peliculas = data;
      });
    }
  }

  limpiarFiltros(): void {
    this.idiomaSeleccionado = '0'; 
    this.peliculaService.listarPeliculas().subscribe(
      data => {
        this.peliculas = data;
      }
    );  
  }
}