import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroClienteComponent } from './components/cliente-registro/registro-cliente.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [RegistroClienteComponent, ClienteListaComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  exports: [RegistroClienteComponent, ClienteListaComponent, ConfirmDialogComponent],
  providers: [HttpClientModule]
})
export class RegistroClienteModule { }
