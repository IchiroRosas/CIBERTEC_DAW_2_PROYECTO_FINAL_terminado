import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaService } from '../../service/sala.service';
import { Router } from '@angular/router';
import { Sala } from '../../dto/sala-dto';

@Component({
  selector: 'app-registrar-sala',
  templateUrl: './registrar-sala.component.html',
  styleUrls: ['./registrar-sala.component.css']
})
export class RegistrarSalaComponent {
  salaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salaService: SalaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.salaForm = this.fb.group({
      codsala: ['', Validators.required],
      capacidad: [0, [Validators.required, Validators.min(1)]]
    });
  }

  registrarSala(): void {
    if (this.salaForm.invalid) return;

    const nuevaSala: Sala = this.salaForm.value;

    this.salaService.registrarSala(nuevaSala).subscribe({
      next: (response) => {
        console.log('Sala registrada con éxito:', response);
        this.salaForm.reset({ codsala: '', capacidad: 0 });
        this.router.navigate(['/salas']);
      },
      error: (error) => {
        console.error('Error al registrar la sala:', error);
      }
    });
  }

  volverListado(): void {
    this.router.navigate(['/salas']);
  }
}
