import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from '../services/reset-password.service';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-reset_password',
  templateUrl: './reset_password.component.html',
  styleUrls: ['./reset_password.component.scss'],
})
export class Reset_PasswordComponent implements OnInit {
  version: string | null = environment.version;
  public inputPwd: any = {
    password: '',
    token: this.router.snapshot.params.id,
  };
  constructor(
    public route: Router,
    private router: ActivatedRoute,
    public resetpasswordservice: ResetPasswordService
  ) {}

  ngOnInit() {}

  resetPassword() {
    if ( this.inputPwd.password == ""){
      alertyfy.error('Password tidak boleh kosong')
    } else {
      this.resetpasswordservice.passwordInput(this.inputPwd).subscribe((response: any) => {
        if(response.status) {
          alertyfy.success('Berhasil Mengganti Password')
          this.route.navigate(['login']);
        }
      })
    }
   
  }
}
