import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { environment } from '@env/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  version: string | null = environment.version;
  teamForm: FormGroup;
  public teamLomba: any = {};
  public loading = false;
  id: any = '';
  constructor(public teamservice: TeamService, public route: Router) {}

  ngOnInit() {
    this.teamForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  updateTeam() {
    this.loading = true;
    this.teamservice.inputTeam(this.teamLomba, this.id).subscribe((response: any) => {
      if (response.success) console.log('>>>>>>>>>', response);
      //    {
      //   alertyfy.success('Berhasil');
      //     this.route.navigate(['profile']);
      // }
    });
  }

  get username() {
    return this.teamForm.get('username') as FormControl;
  }
  get phoneNumber() {
    return this.teamForm.get('phoneNumber') as FormControl;
  }
}
