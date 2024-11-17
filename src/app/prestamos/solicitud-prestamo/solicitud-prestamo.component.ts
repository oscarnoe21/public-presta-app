import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CuotasDialogComponent } from '../cuotas-dialog/cuotas-dialog.component';
import { PrestamoService } from '../prestamos.service';

@Component({
  selector: 'app-solicitud-prestamo',
  templateUrl: './solicitud-prestamo.component.html',
  styleUrls: ['./solicitud-prestamo.component.css']
})
export class SolicitudPrestamoComponent {
  prestamo = {
    clienteId: '',
    monto: 0,
    plazo: 0,
    interes: 0,
    frecuenciaPago: 'mensual'
  };

  constructor(private prestamoService: PrestamoService, private router: Router, public dialog: MatDialog) { }

  onSubmit() {
    this.prestamoService.solicitarPrestamo(this.prestamo)
      .subscribe(response => {
        console.log('Préstamo solicitado:', response);
        this.router.navigate(['/clientes']);
      }, error => {
        console.error('Error al solicitar el préstamo:', error);
      });
  }

  verPlanificacion() {
    const cuotas = this.calcularCuotas();
    this.dialog.open(CuotasDialogComponent, {
      data: { cuotas }
    });
  }

  calcularCuotas() {
    const cuotas = [];
    const numeroCuotas = this.prestamo.frecuenciaPago === 'mensual' ? this.prestamo.plazo : this.prestamo.plazo * 4;
    const montoCuota = this.prestamo.monto / numeroCuotas;
    const interesCuota = (this.prestamo.monto * (this.prestamo.interes / 100)) / numeroCuotas;

    for (let i = 1; i <= numeroCuotas; i++) {
      cuotas.push({
        numero: i,
        capital: montoCuota,
        interes: interesCuota,
        monto: montoCuota + interesCuota
      });
    }

    return cuotas;
  }
}
