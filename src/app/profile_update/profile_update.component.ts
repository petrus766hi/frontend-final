import { Component, OnInit } from '@angular/core';
import { ProfileUpdateService } from '../services/profile-update.service';
import { environment } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-profile_update',
  templateUrl: './profile_update.component.html',
  styleUrls: ['./profile_update.component.scss'],
})
export class Profile_UpdateComponent implements OnInit {
  version: string | null = environment.version;
  
  public editProfile: any = {}
  id: any =''
  constructor(
    public profileupdateservice: ProfileUpdateService,
    private router: ActivatedRoute,
    public route: Router,
  ) {
    this.id =  localStorage.getItem('id')
  }

  ngOnInit() {}

  updateProfile() {
    this.profileupdateservice.inputProfile(this.editProfile, this.id).subscribe((response: any) => {
      console.log('zzzzzzz', response)
      alertyfy.success('Berhasil Update Profile');
      this.route.navigate(['profile']);
    })
  }
}
