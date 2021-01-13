import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { environment } from '@env/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  public id: any;
  public getDataGroup: any = [];
  constructor(public teamservice: TeamService, public route: Router) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.getTeam();
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  addTeam() {
    this.teamservice.AddTeam(this.teamLomba, this.id).subscribe((response: any) => {
      if (response.success) {
        this.route.navigate(['team']);
      }
    });
  }

  getTeam() {
    this.teamservice.GetTeam(this.id).subscribe((response: any) => {
      this.getDataGroup = response.data.is_group;
    });
  }
}
