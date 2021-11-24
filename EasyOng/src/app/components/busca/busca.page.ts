import { OngService } from './../../services/ong.service';
import { take } from 'rxjs/operators';
import { OngRepository } from './../../repositories/ong.service.repository';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ong } from 'src/app/models/ong.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public busca: string;
  public resultSearch: Array<Ong>;

  constructor(
    private readonly route: Router,
    private readonly ongRepository: OngRepository,
    private readonly ongService: OngService
  ) { }


  ngOnInit() {}

  public goToOng(ong: Ong): void {
    this.ongService.setOng(ong);
    this.route.navigate(['/ong']);
  }

  public search() {
    this.ongRepository.readByName(this.busca).pipe(take(1)).subscribe((searchResponse)=>{
      this.resultSearch = searchResponse;
    });
  }

}
