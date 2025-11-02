import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../dto/producto-dto';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {
productoForm!: FormGroup;
  idProducto!: number;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ✅ Inicializa el formulario reactivo con validadores
    this.productoForm = this.fb.group({
      nombreProducto: ['', [Validators.required, Validators.minLength(3)]],
      precioProducto: [0, [Validators.required, Validators.min(0.01)]],
      marcaProducto: ['', [Validators.required, Validators.minLength(2)]]
    });

    // ✅ Obtiene el parámetro id de la URL
    this.idProducto = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.idProducto || isNaN(this.idProducto)) {
      console.error('ID de producto inválido');
      this.router.navigate(['/productos']);
      return;
    }

    // ✅ Carga los datos del producto
    this.productoService.obtenerProductoPorId(this.idProducto).subscribe({
      next: (data: Producto) => {
        this.productoForm.patchValue({
          nombreProducto: data.nombreProducto,
          precioProducto: data.precioProducto,
          marcaProducto: data.marcaProducto
        });
      },
      error: err => {
        console.error('Error al obtener el producto:', err);
        alert('No se pudo cargar el producto.');
      }
    });
  }

  actualizarProducto(): void {
    if (this.productoForm.invalid) return;

    const productoActualizado: Producto = {
      idProducto: this.idProducto,
      ...this.productoForm.value
    };

    this.productoService.actualizarProducto(productoActualizado).subscribe({
      next: response => {
        console.log('Producto actualizado:', response);
        this.router.navigate(['/productos']);
      },
      error: err => {
        console.error('Error al actualizar el producto:', err);
        alert('Error al actualizar el producto.');
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/productos']);
  }
}
