import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../../service/pelicula.service';
import { Router } from '@angular/router';
import { Pelicula } from '../../dto/pelicula-dto';

@Component({
  selector: 'app-registrar-pelicula',
  templateUrl: './registrar-pelicula.component.html',
  styleUrls: ['./registrar-pelicula.component.css']
})
export class RegistrarPeliculaComponent {
peliculaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
      nombrepelicula: ['', Validators.required],
      directorpelicula: ['', Validators.required],
      generopelicula: ['', Validators.required],
      duracionpelicula: ['', [Validators.required]],
      idiomaPelicula: ['', Validators.required],
      clasificacionpelicula: ['', [Validators.required]]
    });
  }

  registrarPelicula(): void {
    if (this.peliculaForm.invalid) return;

    const nuevaPelicula: Pelicula = this.peliculaForm.value;

    this.peliculaService.registrarPelicula(nuevaPelicula).subscribe({
      next: (response) => {
        console.log('Película registrada con éxito:', response);
        this.peliculaForm.reset({
          nombrepelicula: '',
          directorpelicula: '',
          generopelicula: '',
          duracionpelicula: '',
          idiomaPelicula: '',
          clasificacionpelicula: ''
        });
        this.router.navigate(['/peliculas']);
      },
      error: (error) => {
        console.error('Error al registrar la película:', error);
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/peliculas']);
  }
}
