import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../dto/sala-dto';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private urlBase = 'http://localhost:8080/api/salas';
  private urlFiltro = 'http://localhost:8081/filtros/salas';

  constructor(private http: HttpClient) { }

  listarSalas(): Observable<any> {
    return this.http.get<any>(this.urlBase)
  }

  registrarSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.urlBase, sala)
  }

  eliminarSala(id: number): Observable<string> {
    return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
  }

  actualizarSala(sala: Sala): Observable<string> {
    return this.http.put(`${this.urlBase}/${sala.idsala}`, sala, { responseType: 'text' })
  }

  obtenerSalaPorId(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.urlBase}/${id}`)
  }

  filtrarSalas(capacidad: number): Observable<Sala[]> {
    return this.http.get<Sala[]>(`${this.urlFiltro}/${capacidad}`)
  }

}
