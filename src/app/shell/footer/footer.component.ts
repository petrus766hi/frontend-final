import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  menuHidden = true;
  showUser: boolean;
  showAdmin: boolean;
  constructor() {}

  ngOnInit() {
    this.showHeaderAdmin();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  showHeaderAdmin() {
    let roleAdmin = localStorage.getItem('role');
    if (roleAdmin == 'panitia' || roleAdmin == 'master') {
      this.showUser = false;
      this.showAdmin = true;
    } else {
      this.showUser = true;
      this.showAdmin = false;
    }
  }
}
