import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private urlBase = 'http://localhost:8080/api/peliculas';
  private urlFiltro = 'http://localhost:8080/api/peliculas/idioma';

  constructor(private http : HttpClient) {}

  listarPeliculas() : Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.urlBase);
  }

  public registrarPelicula(pelicula: Pelicula): Observable<any> { 
      return this.http.post<any>(this.urlBase, pelicula); 
  }
  
  eliminarPelicula(id: number): Observable<any> {
      return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
  }  
  
  actualizarPelicula(pelicula: Pelicula): Observable<any> {
      return this.http.put(`${this.urlBase}/${pelicula.idpelicula}`, pelicula, { responseType: 'text' });
  }
  
  obtenerPeliculaPorId(id: number): Observable<Pelicula> {
      return this.http.get<Pelicula>(`${this.urlBase}/${id}`);
  }

  filtrarPelicula(idioma: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.urlFiltro}/${idioma}`);
  }
}
