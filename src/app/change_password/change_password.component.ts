import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-change_password',
  templateUrl: './change_password.component.html',
  styleUrls: ['./change_password.component.scss'],
})
export class Change_PasswordComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
