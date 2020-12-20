import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../services/password.service';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  version: string | null = environment.version;
  emailform: FormGroup;
  public inputEmail: any = {};
  public loading: boolean = false;

  constructor(public router: Router, public passwordservice: PasswordService) {}

  ngOnInit() {
    this.emailform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  forgotPassword() {
    this.loading = true;
    if (this.inputEmail.email === '') {
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Silahkan Isi Terlebih Dahulu',
      });
    } else {
      this.passwordservice.passwordForget(this.inputEmail).subscribe((response: any) => {
        if (response.success) {
          this.loading = false;
          Swal.fire({
            icon: 'success',
            title: response.msg,
          });
        }
      });
    }
  }

  get email() {
    return this.emailform.get('email') as FormControl;
  }
}
