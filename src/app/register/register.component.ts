import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { environment } from '@env/environment';
import { Peserta } from '../models/peserta';
import * as alertyfy from 'alertifyjs';

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
  private peserta: Peserta;

  constructor(public registerservice: RegisterService, public router: Router) {}

  ngOnInit() {}

  register() {
    this.registerservice.register(this.registerConnect).subscribe((response: any) => {
      if (response.success) {
        alertyfy.success('Register Berhasil');
        this.router.navigate(['login']);
      } else {
        alertyfy.error('Register Tidak Berhasil');
      }
    });
  }
}
