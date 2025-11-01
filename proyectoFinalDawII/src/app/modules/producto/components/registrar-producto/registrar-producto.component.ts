import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../dto/producto-dto';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {
 productoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ✅ Formulario reactivo con validaciones
    this.productoForm = this.fb.group({
      nombreProducto: ['', [Validators.required, Validators.minLength(3)]],
      precioProducto: [0, [Validators.required, Validators.min(1)]],
      marcaProducto: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  registrarProducto(): void {
    if (this.productoForm.invalid) return;

    const nuevoProducto: Producto = this.productoForm.value;

    this.productoService.registrarProducto(nuevoProducto).subscribe({
      next: (response) => {
        console.log('Producto registrado con éxito:', response);
        alert('✅ Producto registrado correctamente');
        this.productoForm.reset({ nombreProducto: '', precioProducto: 0, marcaProducto: '' });
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        console.error('❌ Error al registrar el producto:', error);
        alert('Ocurrió un error al registrar el producto.');
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/productos']);
  }
}
