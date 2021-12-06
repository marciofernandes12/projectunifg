import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { OngRepository } from 'src/app/repositories/ong.service.repository';
import { ToastService } from 'src/app/services/toast.service';

import { OngService } from './../../services/ong.service';

/* eslint-disable @typescript-eslint/naming-convention */
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly ongService: OngService,
    private readonly ongRepository: OngRepository,
    private readonly route: Router,
    private readonly toast: ToastService,
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      ong_email: ['',[Validators.required]],
      ong_senha: ['',[Validators.required]],
    });
  }

  public signin(): void{
    this.ongRepository.signin(this.form.value)
    .pipe(take(1))
    .subscribe(
      (signinResponse)=>{
        if(signinResponse.ong_id){
          this.ongService.setOng(signinResponse);
          localStorage.setItem('ong_id',signinResponse.ong_id);
          this.goToHome();
        } else {
          this.toast.displayToast('ONG não cadastrada em nossos registros.');
        }
      }
    );
  }

  public goToHome(): void {
    interval(1000)
          .pipe(take(1))
          .subscribe(n => {
            this.route.navigate(['/home']);
          });
  }

  public goToSignup(): void {
    this.route.navigate(['/signup']);
  }

  public goToForget(): void {
    this.route.navigate(['/forget']);
  }

}
