import { OngService } from './../../services/ong.service';
import { OngRepository } from './../../repositories/ong.service.repository';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Ong } from 'src/app/models/ong.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public session: string;

  constructor(
    private readonly route: Router,
    private readonly ongRepository: OngRepository,
    private readonly ongService: OngService,
  ) { }

  public ngOnInit() {
    this.session = localStorage.getItem('ong_id');
    console.log(this.session);
  }

  public goToMap(): void {
    this.route.navigate(['/mapa']);
  }

  public goToSearch(): void {
    this.route.navigate(['/search']);
  }

  public goToTalkUs(): void {
    this.route.navigate(['/talk']);
  }

  public goToEdit(): void {
        this.ongRepository.readById(this.session).pipe(take(1)).subscribe((ongResponse: Ong) => {
            this.ongService.setOng(ongResponse);
            this.route.navigate(['/edicao']);
        });
  }

}
