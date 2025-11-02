import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaService } from '../../../sala/service/sala.service';
import { FuncionInserto } from '../../dto/funcion-dto';
import { Router } from '@angular/router';
import { FuncionService } from '../../service/funcion.service';
import { Sala } from '../../../sala/dto/sala-dto';
import { Pelicula } from '../../../pelicula/dto/pelicula-dto';
import { PeliculaService } from '../../../pelicula/service/pelicula.service';

@Component({
  selector: 'app-registrar-funcion',
  templateUrl: './registrar-funcion.component.html',
  styleUrls: ['./registrar-funcion.component.css']
})
export class RegistrarFuncionComponent {
salas: Sala [] = [];
peliculas: Pelicula [] = [];
funcionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private funcionService: FuncionService,
    private salaService: SalaService,
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.funcionForm = this.fb.group({
      fechaFuncion: [null, Validators.required],
      idsala: [0,Validators.required],
      idpelicula: [0,Validators.required]
    });

    this.cargarSalas();
    this.cargarPeliculas();
  }

  private cargarSalas(): void {
    this.salaService.listarSalas().subscribe(data => {
      this.salas = data;
    });
  }

  private cargarPeliculas(): void {
    this.peliculaService.listarPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }
  
  registrarFuncion(): void {
    if (this.funcionForm.invalid) return;

    const nuevaFuncion: FuncionInserto = this.funcionForm.value;

    this.funcionService.registrarFuncion(nuevaFuncion).subscribe({
      next: (response) => {
        console.log('Función registrada con éxito:', response);
        this.funcionForm.reset({ fechaFuncion: null, idsala: 0, idpelicula: 0});
        this.router.navigate(['/funciones']);
      },
      error: (error) => {
        console.error('Error al registrar la función:', error);
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/funciones']);
  }
}