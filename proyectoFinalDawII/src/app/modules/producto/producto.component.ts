import { Component } from '@angular/core';
import { Producto } from './dto/producto-dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from './service/producto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos: Producto[] = [];
  filtroForm!: FormGroup;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      precio: [0]
    });

    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.productoService.listarProductos().subscribe(data => {
      this.productos = data;
    });
  }

  irAregistrarProducto(): void {
    this.router.navigate(['/productos/registrar']);
  }

  irAactualizarProducto(id: number): void {
    this.router.navigate(['/productos/actualizar', id]);
  }

  abrirDialogEliminar(id: number): void {
    const dialogRef = this.dialog.open(EliminarProductoComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.productoService.eliminarProducto(id).subscribe({
          next: (mensaje) => {
            console.log('Producto eliminado:', mensaje);
            this.cargarProductos();
          },
          error: (err) => console.error('Error al eliminar el producto:', err)
        });
      }
    });
  }

  filtrarProductos(): void {
    const precioSeleccionado = this.filtroForm.value.precio;
    if (precioSeleccionado > 0) {
      this.productoService.filtrarProductos(precioSeleccionado).subscribe(data => {
        this.productos = data;
      });
    } else {
      this.cargarProductos();
    }
  }

  limpiarFiltros(): void {
    this.filtroForm.reset({ precio: 0 });
    this.cargarProductos();
  }
}
