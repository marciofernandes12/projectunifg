import { Injectable } from '@angular/core';

import { Ong } from './../models/ong.model';


@Injectable({
  providedIn: 'root'
})
export class OngService {

    public ong: Ong;

    public setOng(ong: Ong): void {
        this.ong = ong;
    }

    public getOng(ong: Ong): Ong {
        return this.ong;
    }

}
