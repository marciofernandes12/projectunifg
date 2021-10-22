import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(
    private readonly route: Router
  ) { }

  ngOnInit() {
  }

  public goToHome(): void {
    this.route.navigate(['/home']);
  }

}
