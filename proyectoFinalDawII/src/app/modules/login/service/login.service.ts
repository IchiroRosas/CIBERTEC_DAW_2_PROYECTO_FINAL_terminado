import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../dto/admin-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/acceso';

  loginAdministrador(request: Administrador): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, request);
  }

  public registrarNuevoAdmin(administrador: Administrador): Observable<any> {
    const url = `${this.baseUrl}/registro`;
    return this.http.post<any>(url, administrador);
  }

}
