import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../services/password.service';
import { environment } from '@env/environment';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  version: string | null = environment.version;
  public inputEmail: any = {};

  constructor(public router: Router, public passwordservice: PasswordService) {}

  ngOnInit() {}

  forgotPassword() {
    this.passwordservice.passwordForget(this.inputEmail).subscribe((response: any) => {
      console.log('zzzzz', response);
      if (response.success) {
        alertyfy.success('Silahkan cek email anda');
      }
    });
  }
}
