import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router
    ){}

    canActivate() {
        const id = localStorage.getItem('ong_id');
        if(id !== null){
            this.router.navigate(['/home']);
            return false;
        }

        return true;
    }
}
