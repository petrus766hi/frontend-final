import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1;
  public loginConnect: any = {};

  constructor(
    public loginservice: LoginService, 
    public router: Router 
    ) {}

  ngOnInit() {}

  loginUser() {
    this.loginservice.login(this.loginConnect).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('token', response.tokens);
        localStorage.setItem('role', response.data.role);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Login',
          text: 'Selamat Datang' + ' ' + response.data.username,
        });
        if (response.data.role !== 'panitia') {
          this.router.navigate(['home']);
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil Login Anda Adalah Panitia',
            text: 'Selamat Datang' + ' ' + response.data.role,
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Dan Password Tidak Cocok',
          footer: '<a href>Why do I have this issue?</a>',
        });
      }
    });
  }
}
