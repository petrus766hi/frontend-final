import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { ChangePwdService } from '../services/change-pwd.service';
import Swal from 'sweetalert2';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-change_pwd',
  templateUrl: './change_pwd.component.html',
  styleUrls: ['./change_pwd.component.scss'],
})
export class Change_PwdComponent implements OnInit {
  version: string | null = environment.version;
  public inputPassword: any = {
    password: '',
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email'),
  };
  constructor(public route: Router, public changepwdservice: ChangePwdService) {}

  ngOnInit() {}

  changePassword() {
    // if( this.inputPassword.password == "" || this.inputPassword.confirmpassword == ""){
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Password Tidak Boleh Kosong',
    //     footer: '<a href>Why do I have this issue?</a>',
    //   });
    // }else{
    // this.changepwdservice.pwdInput(this.inputPassword).subscribe((response: any) => {
    //   console.log('xxx', this.inputPassword)
    // if(response.status) {
    //   this.route.navigate(['profile']);
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Gagal Merubah Password',
    //     footer: '<a href>Why do I have this issue?</a>',
    //   });
    // }
    // })
    // }

    if (this.inputPassword.password == '' || this.inputPassword.confirmpassword == '') {
      console.log('xxx', this.inputPassword);
      alertyfy.error('Password tidak boleh kosong');
    } else if (this.inputPassword.password !== '' || this.inputPassword.confirmpassword !== '') {
      alertyfy.error('Password tidak sama');
    } else {
      this.changepwdservice.pwdInput(this.inputPassword).subscribe((response: any) => {
        if (response.status) {
          this.route.navigate(['profile']);
        }
      });
    }
  }
}
