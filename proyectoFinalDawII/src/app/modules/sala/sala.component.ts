import { Component } from '@angular/core';
import { Sala } from './dto/sala-dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaService } from './service/sala.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EliminarSalaComponent } from './components/eliminar-sala/eliminar-sala.component';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  salas: Sala [] = [];
  filtroForm!: FormGroup;

  constructor(
    private salaService: SalaService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Inicializamos formulario reactivo
    this.filtroForm = this.fb.group({
      capacidad: [0]
    });

    // Cargamos todas las salas al inicio
    this.cargarSalas();
  }

  private cargarSalas(): void {
    this.salaService.listarSalas().subscribe(data => {
      this.salas = data;
    });
  }

  irAregistrarSala(): void {
    this.router.navigate(['/salas/registrar']);
  }
  
  irAactualizarSala(id: number): void {
    this.router.navigate(['/salas/actualizar', id]);
  }

  abrirDialogEliminar(id: number): void {
    const dialogRef = this.dialog.open(EliminarSalaComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.salaService.eliminarSala(id).subscribe({
          next: (response) => {
            console.log('Sala eliminada:', response);
            this.cargarSalas(); // recarga la lista
          },
          error: (err) => console.error('Error al eliminar:', err)
        });
      }
    });
  }

  filtrarSalas(): void {
    const capacidadSeleccionada = this.filtroForm.value.capacidad;
    if (capacidadSeleccionada > 0) {
      this.salaService.filtrarSalas(capacidadSeleccionada).subscribe(data => {
        this.salas = data;
      });
    } else {
      this.cargarSalas();
    }
  }

  limpiarFiltros(): void {
    this.filtroForm.reset({ capacidad: 0 });
    this.cargarSalas();
  }
}
