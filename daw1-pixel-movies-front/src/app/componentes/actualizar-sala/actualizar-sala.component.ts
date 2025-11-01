import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sala } from '../../models/sala';
import { SalaService } from '../../services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-sala',
  imports: [CommonModule,FormsModule],
  templateUrl: './actualizar-sala.component.html',
  styleUrl: './actualizar-sala.component.css'
})
export class ActualizarSalaComponent implements OnInit {
  sala: Sala = {
    idsala: 0,
    codsala: '',
    capacidad: 0
  };

  constructor(
    private salaService: SalaService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.salaService.obtenerSalaPorId(id).subscribe({
      next: data => this.sala = data,
      error: err => console.error('Error al obtener sala:', err)
    });
  }

  actualizarSala(): void {
    this.salaService.actualizarSala(this.sala).subscribe({
      next: msg => {
        console.log(msg);
        this.router.navigate(['/listadoSalas']);
      },
      error: err => console.error('Error al actualizar:', err)
    });
  }

  volverListado(): void {
    this.router.navigate(['/listadoSalas']);
  }

}
