import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../dto/producto-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private urlBase = 'http://localhost:8080/api/productos';
  private urlFiltro = 'http://localhost:8081/filtros/productos';

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlBase);
  }

  public registrarProducto(producto: Producto): Observable<any> { 
    return this.http.post<any>(this.urlBase, producto); 
  } 
  
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
  }  

  actualizarProducto(producto: Producto): Observable<any> {
    return this.http.put(`${this.urlBase}/${producto.idProducto}`, producto, { responseType: 'text' });
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlBase}/${id}`);
  }
 
  filtrarProductos(precioProducto: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlFiltro}/${precioProducto}`);
  }
}
