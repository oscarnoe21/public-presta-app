import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './registro-cliente/components/cliente-lista/cliente-lista.component';
import { RegistroClienteComponent } from './registro-cliente/components/cliente-registro/registro-cliente.component';
import { SolicitudPrestamoComponent } from './prestamos/solicitud-prestamo/solicitud-prestamo.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'clientes/editar/:id', component: RegistroClienteComponent },
  { path: 'clientes/nuevo', component: RegistroClienteComponent },
  { path: 'prestamo/solicitud', component: SolicitudPrestamoComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
