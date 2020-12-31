import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LombaService } from './lomba.service';
import { Lomba } from './lomba';
import { identifierName } from '@angular/compiler';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-about_dashboard',
  templateUrl: './about_dashboard.component.html',
  styleUrls: ['./about_dashboard.component.scss'],
})
export class About_DashboardComponent implements OnInit {
  constructor(private lombaservice: LombaService, private router: Router, private ngxLoader: NgxUiLoaderService) {}
  data: any = '';
  tournaments: Lomba[];
  page = 1;
  pageSize = 6;

  ngOnInit() {
    this.getSemuaTournament();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  getSemuaTournament() {
    this.ngxLoader.start();
    this.lombaservice
      .getAllTournament()
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        if (result.success) {
          this.tournaments = result.data.tournaments;
          setTimeout(() => {
            this.ngxLoader.stop();
          }, 3000);
        } else {
          setTimeout(() => {
            this.ngxLoader.stop();
          }, 3000);
        }
      });
  }
  activeTournament(id: any) {
    this.ngxLoader.start();
    const data = {
      Is_active: true,
    };
    this.lombaservice
      .getUpdateTournament(id, data)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: result.msg,
          });
          setTimeout(() => {
            this.ngxLoader.stop();
          }, 3000);
          this.router.navigate(['tournament']);
        } else {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });
          setTimeout(() => {
            this.ngxLoader.stop();
          }, 3000);
        }
      });
  }

  status(value: boolean) {
    if (value) {
      return (this.data = `<span class="badge bg-success">Aktif</span>`);
    } else {
      return (this.data = `<span class="badge bg-danger">Tidak Aktif</span>`);
    }
  }

  list(id: any) {
    this.router.navigate(['tournament/detailpeserta'], { queryParams: { idTournament: id } });
  }
  pageChanged(event: any) {
    this.page = event;
  }
}
