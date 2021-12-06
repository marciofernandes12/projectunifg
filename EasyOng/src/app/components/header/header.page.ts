import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  public session: string;

  constructor(
    private readonly route: Router
  ) { }

  ngOnInit() {
    this.session = localStorage.getItem('ong_id');
  }

  public goToHome(): void {
    this.route.navigate(['/home']);
  }

  public goToSignin(): void {
    this.route.navigate(['/signin']);
  }

  public logout(): void {
    localStorage.removeItem('ong_id');
    this.route.navigate(['/signin']);
  }

}
