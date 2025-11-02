import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrl: './eliminar-pelicula.component.css'
})
export class EliminarPeliculaComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarPeliculaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }

  cancelar(): void {
    this.dialogRef.close(false);
  }

  confirmar(): void {
    this.dialogRef.close(true);
  }
}
