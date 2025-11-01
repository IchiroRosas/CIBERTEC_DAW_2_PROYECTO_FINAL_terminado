import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-sala',
  templateUrl: './eliminar-sala.component.html',
  styleUrls: ['./eliminar-sala.component.css']
})
export class EliminarSalaComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarSalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

}
