import { Component } from '@angular/core';
import { Funcion } from '../../models/funcion';
import { FuncionService } from '../../services/funcion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-funciones',
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-funciones.component.html',
  styleUrl: './listar-funciones.component.css'
})
export class ListarFuncionesComponent {
  funciones: Funcion[] = [];
  constructor(private funcionService: FuncionService, private router: Router) { }

  ngOnInit(): void {
    this.funcionService.listarFunciones().subscribe(
      data => {
        this.funciones = data;
      }
    );
  }

  irAregistrarFuncion(): void {
    this.router.navigate(['/registroFuncion']);
  }
  
  irAactualizarFuncion(id: number): void {
    this.router.navigate(['/actualizarFuncion', id]);
  }
  
  eliminarFuncion(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta función?')) {
      this.funcionService.eliminarFuncion(id).subscribe({
        next: (mensaje) => {
          console.log(mensaje);
          this.funcionService.listarFunciones().subscribe(
            data => {
              this.funciones = data;
            }
          );
        },
        error: (err) => {
          console.error('Error al eliminar la sala:', err);
        }
      });
    }
  }

  fechaSeleccionada: Date | null = null;

  filtrarFuncion(): void {
    if (this.fechaSeleccionada) {
      this.funcionService.filtrarFuncion(this.fechaSeleccionada).subscribe(data => {
        this.funciones = data;
      });
    } else {
      this.funcionService.listarFunciones().subscribe(data => {
        this.funciones = data;
      });
    }
  }

  limpiarFiltros(): void {
    this.fechaSeleccionada = null;
    this.funcionService.listarFunciones().subscribe(
      data => {
        this.funciones = data;
      }
    );  
  }

}
