import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Credenciais } from '../models/credenciais.model';
import { Ong } from '../models/ong.model';
import { UpdateResponse } from './../models/update.model';
import { LoaderService } from './../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class OngRepository {

    public baseUrl = 'http://localhost:8000';
    public ong = '/api/ongs';
    public cadastro = '/api/cadastro';
    public login = '/api/login';

    constructor(
      private http: HttpClient,
      private loader: LoaderService
    ) { }

    public create(ong: Ong): Observable<Ong> {
        this.loader.showLoader();
        return this.http.post<Ong>(`${this.baseUrl}${this.cadastro}`, ong)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
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
