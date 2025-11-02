import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-funcion',
  templateUrl: './eliminar-funcion.component.html',
  styleUrl: './eliminar-funcion.component.css'
})
export class EliminarFuncionComponent {
constructor(
    public dialogRef: MatDialogRef<EliminarFuncionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}