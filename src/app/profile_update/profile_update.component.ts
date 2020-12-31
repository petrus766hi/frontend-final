import { Component, OnInit } from '@angular/core';
import { ProfileUpdateService } from '../services/profile-update.service';
import { environment } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile_update',
  templateUrl: './profile_update.component.html',
  styleUrls: ['./profile_update.component.scss'],
})
export class Profile_UpdateComponent implements OnInit {
  version: string | null = environment.version;
  public loading = false;
  profileForm: FormGroup;
  public editProfile: any = {};
  id: any = '';
  constructor(public profileupdateservice: ProfileUpdateService, private router: ActivatedRoute, public route: Router) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

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

  get username() {
    return this.profileForm.get('username') as FormControl;
  }
  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.profileForm.get('phoneNumber') as FormControl;
  }
}
