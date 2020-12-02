import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { environment } from '@env/environment';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1; 
  public registerConnect: any = {}

  constructor(
    public registerservice: RegisterService,
    public router: Router,
    ) {}

  ngOnInit() {}
  
  register(){
    this.registerservice.register(this.registerConnect).subscribe((response : any ) => {
      if(response.success){
        localStorage.setItem('token', response.tokens);
        localStorage.setItem('role', response.data.role);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Membuat Akun',
          text: 'Selamat Datang' + ' ' + response.data.username,
        });
        if (response.data.role !== 'peserta') {
          this.router.navigate(['login']);
        }
      } 
    });
  }
}
