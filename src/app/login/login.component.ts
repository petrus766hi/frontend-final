import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';
import * as alertyfy from 'alertifyjs';
import { NgForm } from '@angular/forms';

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
  public loading = false;
  constructor(public authservice: AuthService, public router: Router) {}

  ngOnInit() {}

  loginUser() {
    this.loading = true;
    this.authservice.login(this.loginConnect).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('token', response.tokens);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('id', response.data._id);
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Login',
          text: 'Selamat Datang' + ' ' + response.data.username,
        });
        if (response.data.role == 'peserta') {
          this.router.navigate(['home']);
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil Login Anda Adalah Peserta',
            text: 'Selamat Datang' + ' ' + response.data.role,
          });
        }
      } else {
        this.loading = false;
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
