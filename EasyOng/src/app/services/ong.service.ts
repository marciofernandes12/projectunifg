import { Injectable } from '@angular/core';

import { Ong } from './../models/ong.model';


@Injectable({
  providedIn: 'root'
})
export class OngService {

    public ong: Ong;
    public id: string;

    public setOng(ong: Ong): void {
        this.ong = ong;
    }

    public getOng(): Ong {
        return this.ong;
    }

}
