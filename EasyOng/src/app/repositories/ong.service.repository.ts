/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Credenciais } from '../models/credenciais.model';
import { IndicacaoModel } from '../models/indicacao.models';
import { Ong } from '../models/ong.model';
import { UpdateResponse } from './../models/update.model';
import { LoaderService } from './../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class OngRepository {

    public baseUrl = 'https://bookofpratice.com/easyong/api';
    public ongs = '/ongs';
    public ong = '/ong';
    public cadastro = '/cadastro';
    public login = '/login';
    public forget = '/remember';
    public indicacao = '/indicacao';

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
        this.loader.showLoader();
        return this.http.get<Ong[]>(`${this.baseUrl}${this.ongs}`)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public readById(id: string): Observable<Ong> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.ongs}/${id}`;
        return this.http.get<Ong>(url)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public readByName(nome: string): Observable<Array<Ong>> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.ong}/${nome}`;
        return this.http.get<Array<Ong>>(url)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public signin(credenciais: Credenciais): Observable<Ong> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.login}`;
        return this.http.post<Ong>(url, credenciais)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public update(ong: Ong,  id: string): Observable<UpdateResponse> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.ongs}/${id}`;
        return this.http.put<UpdateResponse>(url, ong)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public delete(id: string): Observable<Ong> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.ongs}/${id}`;
        return this.http.delete<Ong>(url)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public remember(email: string): Observable<Ong> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.forget}`;
        const param = {ong_email: email};
        return this.http.post<Ong>(url, param)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }

    public indicacoes(indicacao: string): Observable<IndicacaoModel> {
        this.loader.showLoader();
        const url = `${this.baseUrl}${this.indicacao}`;
        const body = {indicacao};
        return this.http.post<IndicacaoModel>(url, body)
        .pipe(
            finalize(()=>this.loader.hideLoader())
        );
    }
}
