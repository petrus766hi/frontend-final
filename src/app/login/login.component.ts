import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1; 
  public loginConnect: any = {}
  constructor(public loginservice: LoginService,public router: Router,) {}

  ngOnInit() {}

  loginUser(){
    this.loginservice.login(this.loginConnect).subscribe((response : any ) => {
      if(response.success){
        this.router.navigate(['home'])
      }else{
        alert('login was not successful')
      }
    })
   
  }
}
