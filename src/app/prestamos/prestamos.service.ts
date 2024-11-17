import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private apiUrl = 'http://localhost:8091/prestamos/'; // Cambia esta URL según tu API

  constructor(private http: HttpClient) { }

  solicitarPrestamo(prestamo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'solicitud', prestamo);
  }
}
