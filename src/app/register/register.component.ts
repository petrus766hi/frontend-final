import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { environment } from '@env/environment';
import * as alertyfy from 'alertifyjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1;
  public registerConnect: any = {};
  public loading = false;
  constructor(public registerservice: RegisterService, public router: Router) {}

  ngOnInit() {}

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
}
