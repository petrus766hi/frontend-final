import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { environment } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profiles: any = Profile;
  id: any = '';
  constructor(public profileservice: ProfileService, private router: ActivatedRoute, public route: Router) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.userProfile();
    console.log('xxx', this.id);
  }

  userProfile() {
    this.profileservice
      .getProfile(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        this.profiles = response.data;
      });
  }
}
