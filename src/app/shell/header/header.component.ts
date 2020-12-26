import { Component, OnInit } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  isWelcome: boolean;
  isLogin: boolean;
  // logginUser: string;
  showUser: boolean;
  showAdmin: boolean;
  constructor() {}

  ngOnInit() {
    const role: any = localStorage.getItem('role');
    if (role === 'peserta') {
      this.isWelcome = true;
      this.isLogin = false;
    } else {
      this.isWelcome = false;
      this.isLogin = true;
    }
    this.showHeaderAdmin();
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

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  // loggin() {
  //   this.logginUser = localStorage.getItem('token');
  //   return this.logginUser;
  // }

  onLogout() {
    let keysToRemove = ['token', 'role', 'email', 'id'];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    alertyfy.success('Anda Telah Logout');
  }
}
