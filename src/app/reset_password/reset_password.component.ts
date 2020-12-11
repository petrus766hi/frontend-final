import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from '../services/reset-password.service';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset_password',
  templateUrl: './reset_password.component.html',
  styleUrls: ['./reset_password.component.scss'],
})
export class Reset_PasswordComponent implements OnInit {
  version: string | null = environment.version;
  public inputPwd: any = {
    password: '',
    token: this.router.snapshot.params.id
  };
  constructor(
    public route: Router,
    private router: ActivatedRoute,
    public resetpasswordservice: ResetPasswordService,
  ) {}

  ngOnInit() {}

  resetPassword() {
    this.resetpasswordservice.passwordInput(this.inputPwd).subscribe((response: any) => {
      if(response.status) {
        this.route.navigate(['login']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password Tidak Boleh Kosong',
          footer: '<a href>Why do I have this issue?</a>',
        });
      }
    })
  }
}
