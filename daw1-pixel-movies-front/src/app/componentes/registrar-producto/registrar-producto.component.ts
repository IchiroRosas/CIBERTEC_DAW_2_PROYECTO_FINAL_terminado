import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-registrar-producto',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.css'
})
export class RegistrarProductoComponent {

  nuevoProducto: Producto = {
    idProducto: 0,
    nombreProducto: "",
    precioProducto: 0,
    marcaProducto: ""
  }

  constructor(private productoService: ProductoService, private router: Router) {}

  registrarProducto() {
    this.productoService.registrarProducto(this.nuevoProducto).subscribe(response => {
      console.log('Producto registrada con éxito:', response);
      this.nuevoProducto = {
        idProducto: 0, nombreProducto: '', precioProducto: 0, marcaProducto: ''
      };
      this.router.navigate(['/listadoProductos']);
    },
      error => {
      console.error('Error al registrar la producto:', error);
      }
    );
  }
  volverListado(): void {
    this.router.navigate(['/listadoProductos']);
  }
}
