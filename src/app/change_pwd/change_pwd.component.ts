import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { ChangePwdService } from '../services/change-pwd.service';
import * as alertyfy from 'alertifyjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change_pwd',
  templateUrl: './change_pwd.component.html',
  styleUrls: ['./change_pwd.component.scss'],
})
export class Change_PwdComponent implements OnInit {
  version: string | null = environment.version;
  passForm: FormGroup;
  public inputPassword: any = {
    password: '',
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email'),
  };
  constructor(public route: Router, public changepwdservice: ChangePwdService) {}

  ngOnInit() {
    this.passForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  changePassword() {
    if (this.inputPassword.password == '') {
      alertyfy.error('Password tidak boleh kosong');
    } else {
      this.changepwdservice.pwdInput(this.inputPassword).subscribe((response: any) => {
        if (response.status) {
          alertyfy.success('Password berhasil diganti');
          this.route.navigate(['profile']);
        }
      });
    }
  }

  get password() {
    return this.passForm.get('password') as FormControl;
  }
}
