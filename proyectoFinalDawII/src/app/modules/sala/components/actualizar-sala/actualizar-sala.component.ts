import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaService } from '../../service/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from '../../dto/sala-dto';

@Component({
  selector: 'app-actualizar-sala',
  templateUrl: './actualizar-sala.component.html',
  styleUrls: ['./actualizar-sala.component.css']
})
export class ActualizarSalaComponent {

  salaForm!: FormGroup;
  idSala!: number;

  constructor(
    private fb: FormBuilder,
    private salaService: SalaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // ✅ Inicializa el formulario reactivo
    this.salaForm = this.fb.group({
      codsala: ['', [Validators.required]],
      capacidad: [0, [Validators.required, Validators.min(1)]]
    });

    // ✅ Obtiene el parámetro id de la URL
    this.idSala = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.idSala || isNaN(this.idSala)) {
      console.error('ID de sala inválido');
      this.router.navigate(['/salas']);
      return;
    }

    // ✅ Carga los datos de la sala
    this.salaService.obtenerSalaPorId(this.idSala).subscribe({
      next: (data: Sala) => {
        // Asigna valores al formulario
        this.salaForm.patchValue({
          codsala: data.codsala,
          capacidad: data.capacidad
        });
      },
      error: err => {
        console.error('Error al obtener la sala:', err);
        alert('No se pudo cargar la sala.');
      }
    });
  }

  actualizarSala(): void {
    if (this.salaForm.invalid) return;

    // Crea el objeto sala actualizado
    const salaActualizada: Sala = {
      idsala: this.idSala,
      ...this.salaForm.value
    };

    this.salaService.actualizarSala(salaActualizada).subscribe({
      next: response => {
        console.log('Sala actualizada:', response);
        alert('Sala actualizada correctamente.');
        this.router.navigate(['/salas']);
      },
      error: err => {
        console.error('Error al actualizar la sala:', err);
        alert('Error al actualizar la sala.');
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/salas']);
  }
}
