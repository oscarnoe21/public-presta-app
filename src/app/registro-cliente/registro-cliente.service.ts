import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralRespons } from '../models/GeneralResponse';

@Injectable({
  providedIn: 'root'
})
export class RegistroClienteService {
  private readonly usuariosUrl:string = 'http://127.0.0.1:9081';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private readonly http: HttpClient) { }

  /**
   * Devuelve todos los clientes
   * @returns
   */
  getAllClientes(): Observable<GeneralRespons<Cliente[]>> {
    return this.http.get<GeneralRespons<Cliente[]>>(this.usuariosUrl + '/clientes/all').pipe(
      tap(_ => console.log('fetched clientes')),
      catchError(this.handleError<GeneralRespons<Cliente[]>>('getAllClientes', { code: -1, message: 'Error al obtener los clientes', data: [] }))
    );
  }

  /**
   * Decuelve un Cliente
   * @param id
   * @returns
   */
  getClientById(id: string): Observable<GeneralRespons<Cliente>> {
    return this.http.get<GeneralRespons<Cliente>>(this.usuariosUrl + '/clientes/' + id).pipe(
      tap(_ => console.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<GeneralRespons<Cliente>>('getClientById', { code: -1, message: 'Error al obtener el cliente', data: { identificacion: '', nombre: '', apellido: '', email: '', telefono: '', direccion: '' } }))
    );
  }

  /**
   * Crea o Modifica un Cliente
   * @param cliente
   * @returns
   */
  addCliente(cliente: Cliente): Observable<GeneralRespons<Cliente>> {
    return this.http.post<GeneralRespons<Cliente>>(this.usuariosUrl + '/clientes', cliente, this.httpOptions).pipe(
      tap((newUsuario: GeneralRespons<Cliente>) => console.log(`added cliente w/ id=${newUsuario.data.identificacion}`)),
      catchError(this.handleError<GeneralRespons<Cliente>>('addUsuario'))
    );
  }

  deleteClient(identificacion: string): Observable<string> {
    return this.http.delete<string>(this.usuariosUrl + '/clientes/' + identificacion, this.httpOptions).pipe(
      tap(_ => console.log(`deleted cliente id=${identificacion}`)),
      catchError(this.handleError<string>('deleteCliente'))
    );
  }
  /**
   *
   * @param operation
   * @param result
   * @returns
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
