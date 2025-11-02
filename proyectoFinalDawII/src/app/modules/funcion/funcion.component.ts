import { Component } from '@angular/core';
import { Funcion } from './dto/funcion-dto';
import { FuncionService } from './service/funcion.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EliminarFuncionComponent } from './components/eliminar-funcion/eliminar-funcion.component';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.css']
})
export class FuncionComponent {
  funciones: Funcion [] = [];
  filtroForm!: FormGroup;

  constructor(
    private funcionService: FuncionService, 
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializamos formulario reactivo
    this.filtroForm = this.fb.group({
      fechaFuncion : null 
    });

    // Cargamos todas las salas al inicio
    this.cargarFunciones();
  }

  private cargarFunciones(): void {
    this.funcionService.listarFunciones().subscribe(data => {
      this.funciones = data;
    });
  }

  irAregistrarFuncion(): void {
    this.router.navigate(['/funciones/registrar']);
  }
  
  irAactualizarFuncion(id: number): void {
    this.router.navigate(['/funciones/actualizar', id]);
  }
  
  abrirDialogEliminar(id: number): void {
      const dialogRef = this.dialog.open(EliminarFuncionComponent, {
        width: '400px',
        data: { id }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.funcionService.eliminarFuncion(id).subscribe({
            next: (response) => {
              console.log('Función eliminada:', response);
              this.cargarFunciones(); // recarga la lista
            },
            error: (err) => console.error('Error al eliminar:', err)
          });
        }
      });
    }

  filtrarFunciones(): void {
    const fechaFuncion = this.filtroForm.value.fechaFuncion;
    if (fechaFuncion != null) {
      this.funcionService.filtrarFuncion(fechaFuncion).subscribe(data => {
        this.funciones = data;
      });
    } else {
      this.cargarFunciones();
    }
  }

  limpiarFiltros(): void {
    this.filtroForm.reset({ fechaFuncion: null });
    this.cargarFunciones();
  }
}