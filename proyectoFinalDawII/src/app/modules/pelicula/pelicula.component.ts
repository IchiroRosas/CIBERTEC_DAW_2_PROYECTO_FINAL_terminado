import { Component } from '@angular/core';
import { Pelicula } from './dto/pelicula-dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculaService } from './service/pelicula.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EliminarPeliculaComponent } from './components/eliminar-pelicula/eliminar-pelicula.component';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
peliculas: Pelicula[] = [];
  idiomas: string[] = [];
  filtroForm!: FormGroup;

  constructor(
    private peliculaService: PeliculaService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Inicializar formulario reactivo
    this.filtroForm = this.fb.group({
      idioma: [0]
    });

    // Cargar películas
    this.cargarPeliculas();
  }

  private cargarPeliculas(): void {
    this.peliculaService.listarPeliculas().subscribe(data => {
      this.peliculas = data;
      this.idiomas = [...new Set(data.map(p => p.idiomaPelicula))];
    });
  }

  irAregistrarPelicula(): void {
    this.router.navigate(['/registroPelicula']);
  }

  irActualizarPelicula(id: number): void {
    this.router.navigate(['/actualizarPelicula', id]);
  }

  abrirDialogEliminar(id: number): void {
    const dialogRef = this.dialog.open(EliminarPeliculaComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.peliculaService.eliminarPelicula(id).subscribe({
          next: () => this.cargarPeliculas(),
          error: (err) => console.error('Error al eliminar película:', err)
        });
      }
    });
  }

  filtrarPeliculas(): void {
    const idiomaSeleccionado = this.filtroForm.value.idioma;
    if (idiomaSeleccionado && idiomaSeleccionado !== 0) {
      this.peliculaService.filtrarPelicula(idiomaSeleccionado).subscribe(data => {
        this.peliculas = data;
      });
    } else {
      this.cargarPeliculas();
    }
  }

  limpiarFiltros(): void {
    this.filtroForm.reset({ idioma: 0 });
    this.cargarPeliculas();
  }
}
