import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionService } from '../../services/funcion.service';
import { FuncionUpdate } from '../../models/funcion';
import { Sala } from '../../models/sala';
import { SalaService } from '../../services/sala.service';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-funcion',
  imports: [CommonModule, FormsModule ],
  templateUrl: './actualizar-funcion.component.html',
  styleUrl: './actualizar-funcion.component.css'
})
export class ActualizarFuncionComponent implements OnInit{

  salas: Sala[] = [];
  peliculas: Pelicula[] = [];

  funcion: FuncionUpdate = {
    idFuncion:0,
    fechaFuncion:new Date(),
    idsala:0,
    idpelicula:0
  }

  constructor(
    private funcionService: FuncionService,
    private salaService: SalaService,
    private peliculaService: PeliculaService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit():void{
    this.cargarSalas();
    this.cargarPeliculas();
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.funcionService.obtenerFuncionPorId(id).subscribe({
      next: data => this.funcion = data,
      error: err => console.error('Error al obtener sala:', err)
    });
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

  actualizarFuncion(): void{
    this.funcionService.actualizarFuncion(this.funcion).subscribe({
      next: msg => {
        console.log(msg);
        this.router.navigate(['/listadoFunciones']);
      },
      error: err => console.error('Error al actualizar:', err)
    });
  }

  volverListado(): void {
    this.router.navigate(['/listadoFunciones']);
  }

}
