import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FuncionInserto } from '../../models/funcion';
import { FuncionService } from '../../services/funcion.service';
import { Router } from '@angular/router';
import { Sala } from '../../models/sala';
import { Pelicula } from '../../models/pelicula';
import { SalaService } from '../../services/sala.service';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-registrar-funcion',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-funcion.component.html',
  styleUrl: './registrar-funcion.component.css'
})
export class RegistrarFuncionComponent {

  nuevaFuncion: FuncionInserto = {
    fechaFuncion: new Date(),
    idsala: 0,
    idpelicula: 0
  }

  salas: Sala[] = [];
  peliculas: Pelicula[] = [];

  constructor(private funcionService: FuncionService, private salaService: SalaService, private peliculaService: PeliculaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarSalas();
    this.cargarPeliculas();
  }

  cargarSalas(): void {
    this.salaService.listarSalas().subscribe(data => {
      this.salas = data;
    });
  }

  cargarPeliculas(): void {
    this.peliculaService.listarPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }

  registrarFuncion() {

    this.funcionService.registrarFuncion(this.nuevaFuncion).subscribe(response => {
      console.log('Función registrada con éxito:', response);
      this.nuevaFuncion = {
        fechaFuncion: new Date(),
        idsala: 0,
        idpelicula: 0
      };
      this.router.navigate(['/listadoFunciones']);
    },
      error => {
        console.error('Error al registrar la función:', error);
      }
    );
  }

  volverListado(): void {
    this.router.navigate(['/listadoFunciones']);
  }
}
