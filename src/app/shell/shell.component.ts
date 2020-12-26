import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  showHead: boolean = false;
  showAdmin: boolean = false;
  showClose: boolean = true;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (
          event['url'] == '/login' ||
          event['url'] == '/register' ||
          event['url'] == '/password' ||
          event['url'] == '/change_password' ||
          event['url'] == '/change_pwd' ||
          event['url'] == '/profile_update' ||
          event['url'] == '/reset_password' ||
          event['url'] == '/team'
        ) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit() {}
}
