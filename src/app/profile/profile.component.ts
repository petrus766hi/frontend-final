import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { environment } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  version: string | null = environment.version;
  profiles : any = Profile
  // public inputProfile: any = {}
  id: any =''
  constructor(
    public profileservice: ProfileService,
    private router: ActivatedRoute,
    public route: Router,
  ) {
    this.id =  localStorage.getItem('id')
  }

  ngOnInit() {
    this.userProfile()
  }

<<<<<<< HEAD
  userProfile(){
    this.profileservice.getProfile(this.id).subscribe((response: any) => {
      this.profiles = response.data
    })
=======
  userProfile() {
    this.profileservice.getProfile(this.inputProfile, this.id).subscribe((response: any) => {
      console.log('mmmmmmmm', response);
    });
>>>>>>> 8a1bcace4b931956610eadf79691d349deefb6df
  }
}
