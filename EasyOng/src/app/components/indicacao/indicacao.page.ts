import { Router } from '@angular/router';
import { OngRepository } from 'src/app/repositories/ong.service.repository';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-indicacao',
  templateUrl: './indicacao.page.html',
  styleUrls: ['./indicacao.page.scss'],
})
export class IndicacaoPage implements OnInit {

  form: FormGroup;
  constructor(
    private readonly ongRepository: OngRepository,
    private readonly route: Router,
    private readonly toast: ToastService,
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = new FormGroup({
        indicacao: new FormControl(''),
    });
  }

  public send(): void {
    this.ongRepository.indicacoes(this.form.get('indicacao').value)
    .pipe(take(1))
    .subscribe(
        ()=> {
            this.toast.displayToast('Indicação efetuada com sucesso.');
            this.route.navigate(['/home']);
        },
        (error)=> {
          console.log(error);
          this.toast.displayToast('falhou');
        }
    );
}

}
