import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header_admin',
  templateUrl: './header_admin.component.html',
  styleUrls: ['./header_admin.component.scss'],
})
export class Header_AdminComponent implements OnInit {
  menuHidden = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  logOut() {
    let keysToRemove = ['token', 'role'];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  }
}
