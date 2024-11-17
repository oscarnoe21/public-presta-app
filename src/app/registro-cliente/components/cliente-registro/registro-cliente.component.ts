import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { RegistroClienteService } from '../../registro-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  standalone: false,
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css',
  providers: [RegistroClienteService]
})
export class RegistroClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  clientes = new Array<Cliente>();
  isEditMode: boolean = false;

  constructor(private readonly registroClienteService: RegistroClienteService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.registroClienteService.getClientById(id).subscribe(cliente => {
        this.cliente = { ...cliente.data };
      });
    }
  }

  onSubmit(): void {
    this.registroClienteService.addCliente(this.cliente)
      .subscribe(cliente => {
        this.clientes.push(cliente.data);
        console.log('Cliente registrado:', cliente);
        this.onBack();
      });
  }

  onBack(): void {
    this.router.navigate(['/clientes']);
  }

  onEdit(cliente: Cliente) {
    this.cliente = { ...cliente };
  }

  onUpdate() {
    const index = this.clientes.findIndex(c => c.identificacion === this.cliente.identificacion);
    if (index !== -1) {
      this.clientes[index] = { ...this.cliente };
      this.onBack();
    }
  }



  resetForm() {
    this.cliente = new Cliente();
  }
}
