import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ong } from '../models/ong.model';
import { UpdateResponse } from './../models/update.model';

@Injectable({
  providedIn: 'root'
})
export class OngRepository {

    public baseUrl = 'http://localhost:8000';
    public ong = '/ongs';

    constructor(
      private http: HttpClient,
    ) { }

    // public showMessage(msg: string, isError: boolean = false): void {
    //     this.snackBar.open(msg, 'x', {
    //     duration: 3000,
    //     horizontalPosition: 'right',
    //     verticalPosition: 'top',
    //     panelClass: isError ? ['msg-error'] : ['msg-success']
    //     });
    // }

    public create(ong: Ong): Observable<Ong> {
        return this.http.post<Ong>(this.baseUrl, ong);
    }

    public read(): Observable<Ong[]> {
        return this.http.get<Ong[]>(this.baseUrl);
    }

    public readById(id: string): Observable<Ong> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Ong>(url);
    }

    public update(ong: Ong): Observable<UpdateResponse> {
        const url = `${this.baseUrl}/${ong}/${ong.ong_id}`
        return this.http.put<UpdateResponse>(url, ong);
    }

    public delete(id: number): Observable<Ong> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Ong>(url);
    }

    // public handlerError(e: any): Observable<any> {
    //     this.showMessage('Ocorreu um erro!', true)
    //     return EMPTY
    // }
}