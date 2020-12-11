import { Component, OnInit } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  
  logginUser: string
  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  loggin() {
     this.logginUser = localStorage.getItem('token');
     return this.logginUser
  }

  onLogout() {
    localStorage.removeItem('token');
    alertyfy.success('Anda Telah Logout');
  }
}
