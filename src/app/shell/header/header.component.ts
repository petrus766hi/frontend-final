import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  
  logginUser: string
  constructor(
    public router: Router,
  ) {}

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
    this.router.navigate(['home'])
  }
}
