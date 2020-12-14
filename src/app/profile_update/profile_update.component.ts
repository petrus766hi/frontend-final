import { Component, OnInit } from '@angular/core';
import { ProfileUpdateService } from '../services/profile-update.service';
import { environment } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile_update',
  templateUrl: './profile_update.component.html',
  styleUrls: ['./profile_update.component.scss'],
})
export class Profile_UpdateComponent implements OnInit {
  version: string | null = environment.version;
  public loading = false;
  public editProfile: any = {};
  id: any = '';
  constructor(public profileupdateservice: ProfileUpdateService, private router: ActivatedRoute, public route: Router) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {}

  updateProfile() {
    this.loading = true;
    this.profileupdateservice.inputProfile(this.editProfile, this.id).subscribe((response: any) => {
      if (response.success) {
        Swal.fire({
          icon: 'success',
          title: 'Anda Berhasil Update Profile Anda',
          text: response.msg,
        });
        this.route.navigate(['profile']);
        this.loading = false;
      } else {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Anda Gagal Update Profile',
        });
      }
    });
  }
}
