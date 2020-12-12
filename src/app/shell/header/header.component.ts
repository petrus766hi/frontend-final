import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  public isShow: boolean = false;
  constructor() {}

  ngOnInit() {
    const role: any = localStorage.getItem('role');
    if (role === 'peserta') {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
