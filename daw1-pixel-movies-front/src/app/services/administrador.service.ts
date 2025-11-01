import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/acceso';

  loginAdministrador(request: Administrador): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, request);
  }

  public registrarNuevoAdmin(administrador: Administrador): Observable<any> {
    return this.http.post<any>(this.baseUrl, administrador);  
  }

}
