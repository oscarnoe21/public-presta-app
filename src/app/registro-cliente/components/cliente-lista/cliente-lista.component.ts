import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Cliente } from '../../../models/cliente';
import { RegistroClienteService } from '../../registro-cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clientes: Array<Cliente> = [];

  displayedColumns: string[] = ['identificacion', 'nombre', 'apellido', 'acciones'];

  constructor(private readonly router: Router, private readonly registroClienteService: RegistroClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.registroClienteService.getAllClientes()
      .subscribe
      (
        clientes => {
          this.clientes = clientes.data;
          console.log('Clientes:', this.clientes);
        }, error => {
          console.error('Error al cargar los clientes:', error);
        }
      );

  }

  onEdit(cliente: Cliente): void {
    console.log('Editar cliente:', cliente);
    this.router.navigate(['/clientes/editar', cliente.identificacion]);
  }

  onDelete(clienteForDelete: Cliente) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registroClienteService.deleteClient(clienteForDelete.identificacion)
          .subscribe(cliente => {
            this.clientes = this.clientes.filter(c => c.identificacion !== clienteForDelete.identificacion);
            console.log('Cliente eliminado:', cliente);
          });
      }
    });

  }

  onNew(): void {
    console.log('Nuevo cliente:');
    this.router.navigate(['/clientes/nuevo']);
  }
}
