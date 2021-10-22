import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public dados = [
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
    {
      name: 'AACD',
      img: '../../assets/musician-5960112_1280.jpg',
      type: 'ONG',
      creation: '1969'
    },
  ];

  constructor(
    private readonly route: Router,
  ) { }

  ngOnInit() {
  }

  public goToOng(id: number): void {
    this.route.navigate(['/ong']);
  }

}
