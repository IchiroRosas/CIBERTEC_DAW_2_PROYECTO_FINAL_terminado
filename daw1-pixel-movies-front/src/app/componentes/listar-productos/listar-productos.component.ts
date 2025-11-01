import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(
      data => {
        this.productos = data;
      }
    );
  }

  irAregistrarProducto(): void {
    this.router.navigate(['/registroProducto']);
  }
  
  irAactualizarProducto(id: number): void {
    this.router.navigate(['/actualizarProducto', id]);
  }

  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe({
        next: (mensaje) => {
          console.log(mensaje);
          this.productoService.listarProductos().subscribe(
            data => {
              this.productos = data;
            }
          );
        },
        error: (err) => {
          console.error('Error al eliminar el producto:', err);
        }
      });
    }
  }

  precioSeleccionado: number = 0;

  filtrarProductos(): void {
    if (this.precioSeleccionado > 0) {
      this.productoService.filtrarProductos(this.precioSeleccionado).subscribe(data => {
        this.productos = data;
      });
    } else {
      this.productoService.listarProductos().subscribe(data => {
        this.productos = data;
      });
    }
  }

  limpiarFiltros(): void {
    this.precioSeleccionado = 0; 
    this.productoService.listarProductos().subscribe(
      data => {
        this.productos = data;
      }
    );  
  }

}
