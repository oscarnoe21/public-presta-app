import { Component } from '@angular/core';
import { Cliente } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cliente: Cliente = new Cliente();
  title = 'app-credit';
}
