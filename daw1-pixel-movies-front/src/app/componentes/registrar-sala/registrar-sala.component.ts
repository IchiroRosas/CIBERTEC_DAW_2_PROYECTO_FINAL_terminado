import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sala } from '../../models/sala';
import { SalaService } from '../../services/sala.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-registrar-sala',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-sala.component.html',
  styleUrl: './registrar-sala.component.css'
})
export class RegistrarSalaComponent {

  nuevaSala: Sala = {
    idsala: 0,
    codsala: '',
    capacidad: 0
  }

  constructor(private salaService: SalaService, private router: Router) { }

  registrarSala() {
    this.salaService.registrarSala(this.nuevaSala).subscribe(response => {
      console.log('Sala registrada con éxito:', response);
      this.nuevaSala = {
        idsala: 0, codsala: '', capacidad: 0
      };
      this.router.navigate(['/listadoSalas']);
    },
      error => {
        console.error('Error al registrar la sala:', error);
      }
    );
  }

  volverListado(): void {
    this.router.navigate(['/listadoSalas']);
  }

}
