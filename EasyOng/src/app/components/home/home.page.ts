import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private readonly route: Router
  ) { }

  ngOnInit() {
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

}
