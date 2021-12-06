import { Router } from '@angular/router';
import { OngRepository } from './../../repositories/ong.service.repository';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly ongRepository: OngRepository,
    private readonly router: Router,
    private readonly toast: ToastService,
  ) {}

  public ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = new FormGroup({
        ong_email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  public send(): void {

    if(this.form.get('ong_email').value){
      this.ongRepository.remember(this.form.get('ong_email').value)
      .pipe(take(1))
          .subscribe(
              ()=> {
                  this.toast.displayToast('Email enviado com sucesso.');
                  this.router.navigate(['']);
              },
              ()=> this.toast.displayToast('falhou')
          );
    }
  }

}

