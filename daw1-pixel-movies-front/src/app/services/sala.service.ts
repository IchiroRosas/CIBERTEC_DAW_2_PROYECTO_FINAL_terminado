import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private urlBase = 'http://localhost:8080/api/salas';
  private urlFiltro = 'http://localhost:8080/api/salas/capacidad';

  constructor(private http: HttpClient) {}

  listarSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.urlBase);
  }

  public registrarSala(sala: Sala): Observable<any> { 
    return this.http.post<any>(this.urlBase, sala); 
  } 
  
  eliminarSala(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
  }  

  actualizarSala(sala: Sala): Observable<any> {
    return this.http.put(`${this.urlBase}/${sala.idsala}`, sala, { responseType: 'text' });
  }

  obtenerSalaPorId(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.urlBase}/${id}`);
  }

  filtrarSalas(capacidad: number): Observable<Sala[]>{
    return this.http.get<Sala[]>(`${this.urlFiltro}/${capacidad}`);
  }

}