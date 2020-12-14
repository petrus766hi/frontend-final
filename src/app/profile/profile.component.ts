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

  profiles: any = Profile;
  id: any = '';
  constructor(public profileservice: ProfileService, private router: ActivatedRoute, public route: Router) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.userProfile();
  }

  userProfile() {
    this.profileservice.getProfile(this.id).subscribe((response: any) => {
      this.profiles = response.data;
    });
  }
}
