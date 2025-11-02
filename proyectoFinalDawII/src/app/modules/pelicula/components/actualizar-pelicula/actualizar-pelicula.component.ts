import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../../service/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../../dto/pelicula-dto';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './actualizar-pelicula.component.html',
  styleUrls: ['./actualizar-pelicula.component.css']
})
export class ActualizarPeliculaComponent {
  peliculaForm!: FormGroup;
  idpelicula!: number;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
      nombrepelicula: ['', [Validators.required]],
      directorpelicula: ['', [Validators.required]],
      generopelicula: ['', [Validators.required]],
      duracionpelicula: ['', [Validators.required]],
      idiomaPelicula: ['', [Validators.required]],
      clasificacionpelicula: ['', [Validators.required]]
    });

    this.idpelicula = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID de película obtenido de la URL:', this.idpelicula);

    if (!this.idpelicula || isNaN(this.idpelicula)) {
      console.error('ID de película inválido');
      this.router.navigate(['/peliculas']);
      return;
    }

    this.peliculaService.obtenerPeliculaPorId(this.idpelicula).subscribe({
      next: (data: Pelicula) => {
        this.peliculaForm.patchValue({
          idpelicula: data.idpelicula,
          nombrepelicula: data.nombrepelicula,
          directorpelicula: data.directorpelicula,
          generopelicula: data.generopelicula,
          duracionpelicula: data.duracionpelicula,
          idiomaPelicula: data.idiomaPelicula,
          clasificacionpelicula: data.clasificacionpelicula
        });
      },
      error: err => {
        console.error('Error al obtener la película:', err);
        alert('No se pudo cargar la película.');
      }
    });
  }

  actualizarPelicula(): void {
    if (this.peliculaForm.invalid) return;

    // Crea el objeto película actualizado
    const peliculaActualizada: Pelicula = {
      idpelicula: this.idpelicula,
      ...this.peliculaForm.value
    };

    this.peliculaService.actualizarPelicula(peliculaActualizada).subscribe({
      next: response => {
        console.log('Película actualizada:', response);
        alert('Película actualizada correctamente.');
        this.router.navigate(['/peliculas']);
      },
      error: err => {
        console.error('Error al actualizar la película:', err);
        alert('Error al actualizar la película.');
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/peliculas']);
  }
}
