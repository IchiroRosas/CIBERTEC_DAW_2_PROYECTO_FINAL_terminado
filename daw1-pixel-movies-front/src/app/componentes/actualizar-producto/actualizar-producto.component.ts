import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-producto',
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  producto: Producto = {
    idProducto: 0,
    nombreProducto: "",
    precioProducto: 0,
    marcaProducto: ""
  }

  constructor (
    private productoService:  ProductoService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.productoService.obtenerProductoPorId(id).subscribe({
      next: data => this.producto = data,
      error: err => console.error('Error al obtener producto:', err)
    });
  }

  actualizarProducto(): void {
    this.productoService.actualizarProducto(this.producto).subscribe({
      next: msg => {
        console.log(msg);
        this.router.navigate(['/listadoProductos']);
      },
      error: err => console.error('Error al actualizar:', err)
    });
  }

  volverListado(): void {
    this.router.navigate(['/listadoProductos']);
  }
}
