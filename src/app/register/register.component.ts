import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1;
  regform: FormGroup;
  public registerConnect: any = {};
  public loading = false;
  constructor(public registerservice: RegisterService, public router: Router) {}

  ngOnInit() {
    this.regform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  register() {
    this.loading = true;
    this.registerservice.register(this.registerConnect).subscribe((response: any) => {
      if (response.success) {
        Swal.fire({
          icon: 'success',
          title: response.msg,
        });
        this.router.navigate(['login']);
        this.loading = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: response.msg,
        });
        this.loading = false;
      }
    });
  }

  onSubmit() {
    alert('form fields are validated successfully!');
  }

  get username() {
    return this.regform.get('username') as FormControl;
  }
  get password() {
    return this.regform.get('password') as FormControl;
  }
  get email() {
    return this.regform.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.regform.get('phoneNumber') as FormControl;
  }
}
