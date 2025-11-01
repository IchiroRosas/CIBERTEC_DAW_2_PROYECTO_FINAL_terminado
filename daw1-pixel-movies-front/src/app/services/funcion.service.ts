import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion, FuncionUpdate } from '../models/funcion';
import { FuncionInserto } from '../models/funcion';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {

  private urlBase = 'http://localhost:8080/api/funciones';
  private urlFiltro = 'http://localhost:8080/api/funciones/fecha';

  constructor(private http: HttpClient) { }

  listarFunciones(): Observable<Funcion[]> {
      return this.http.get<Funcion[]>(this.urlBase);
    }
  
    public registrarFuncion(funcion: FuncionInserto): Observable<any> { 
      return this.http.post<any>(this.urlBase, funcion); 
    } 
    
    eliminarFuncion(id: number): Observable<any> {
      return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
    }  
  
    actualizarFuncion(funcion: FuncionUpdate): Observable<any> {
      return this.http.put(`${this.urlBase}/${funcion.idFuncion}`, funcion, { responseType: 'text' });
    }
  
    obtenerFuncionPorId(id: number): Observable<Funcion> {
      return this.http.get<Funcion>(`${this.urlBase}/${id}`);
    }

    filtrarFuncion(fecha: Date): Observable<Funcion[]> {
      return this.http.get<Funcion[]>(`${this.urlFiltro}/${fecha}`);
    }

}
