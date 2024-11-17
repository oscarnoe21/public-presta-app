import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cuotas-dialog',
  templateUrl: './cuotas-dialog.component.html',
  styleUrls: ['./cuotas-dialog.component.css']
})
export class CuotasDialogComponent {
  displayedColumns: string[] = ['numero', 'capital', 'interes', 'monto'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { cuotas: any[] }) { }
}
