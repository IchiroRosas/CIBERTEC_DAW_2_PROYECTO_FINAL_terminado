import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaService } from '../../../sala/service/sala.service';
import { FuncionService } from '../../service/funcion.service';
import { PeliculaService } from '../../../pelicula/service/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from '../../../sala/dto/sala-dto';
import { Pelicula } from '../../../pelicula/dto/pelicula-dto';
import { Funcion } from '../../dto/funcion-dto';

@Component({
  selector: 'app-actualizar-funcion',
  templateUrl: './actualizar-funcion.component.html',
  styleUrls: ['./actualizar-funcion.component.css']
})
export class ActualizarFuncionComponent {
  salas: Sala [] = [];
  peliculas: Pelicula [] = [];
  funcionForm!: FormGroup;
  idFuncion!: number;

  constructor(
    private fb: FormBuilder,
    private funcionService: FuncionService,
    private salaService: SalaService,
    private peliculaService: PeliculaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // ✅ Inicializa el formulario reactivo
    this.funcionForm = this.fb.group({
      fechaFuncion: ['', [Validators.required]],
      idsala: [0, [Validators.required]],
      idpelicula: [0, [Validators.required]]
    });
    

    // ✅ Obtiene el parámetro id de la URL
    this.idFuncion = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.idFuncion || isNaN(this.idFuncion)) {
      console.error('ID de función inválida');
      this.router.navigate(['/funciones']);
      return;
    }

    // ✅ Carga los datos de la función
    this.funcionService.obtenerFuncionPorId(this.idFuncion).subscribe({
      next: (data: Funcion) => {
        // Asigna valores al formulario
        this.funcionForm.patchValue({
          fechaFuncion: data.fechaFuncion,
          idsala: data.idsala,
          idpelicula: data.idpelicula
        });
      },
      error: err => {
        console.error('Error al obtener la función:', err);
        alert('No se pudo cargar la función.');
      }
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

  actualizarFuncion(): void {
    if (this.funcionForm.invalid) return;

    // Crea el objeto sala actualizado
    const funcionActualizada: Funcion = {
      idFuncion: this.idFuncion,
      ...this.funcionForm.value
    };

    this.funcionService.actualizarFuncion(funcionActualizada).subscribe({
      next: response => {
        console.log('Función actualizada:', response);
        this.router.navigate(['/funciones']);
      },
      error: err => {
        console.error('Error al actualizar la función:', err);
        alert('Error al actualizar la función.');
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/funciones']);
  }
}