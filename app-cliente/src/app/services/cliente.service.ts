// src/app/services/cliente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:7067/api/clientes';

  constructor(private http: HttpClient) {}

  getClientesSP(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sp?paginas=${page}&registros=${pageSize}`);
  }

  getClientesLinq(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/linq?paginas=${page}&registros=${pageSize}`);
  }
}
