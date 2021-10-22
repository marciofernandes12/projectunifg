import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Credenciais } from '../models/credenciais.model';
import { Ong } from '../models/ong.model';
import { UpdateResponse } from './../models/update.model';

@Injectable({
  providedIn: 'root'
})
export class OngRepository {

    public baseUrl = 'http://localhost:8000';
    public ong = '/ongs';
    public cadastro = '/cadastro';
    public login = '/login';

    constructor(
      private http: HttpClient,
    ) { }

    public create(ong: Ong): Observable<Ong> {
        return this.http.post<Ong>(`${this.baseUrl}${this.cadastro}`, ong);
    }

    public read(): Observable<Ong[]> {
        return this.http.get<Ong[]>(`${this.baseUrl}${this.ong}`);
    }

    public readById(id: string): Observable<Ong> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Ong>(url);
    }

    public signin(credenciais: Credenciais): Observable<Ong> {
        const url = `${this.baseUrl}${this.login}`;
        return this.http.post<Ong>(url, credenciais);
    }

    public update(ong: Ong): Observable<UpdateResponse> {
        const url = `${this.baseUrl}/${this.ong}/${ong.ong_id}`;
        return this.http.put<UpdateResponse>(url, ong);
    }

    public delete(id: number): Observable<Ong> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Ong>(url);
    }
}
