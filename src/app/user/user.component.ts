import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { result } from 'lodash';
import { finalize } from 'rxjs/operators';
import { Customer } from './customer';
import { UserService } from './user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  customers: Customer[];
  data: any = '';
  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private userservice: UserService, private ngxLoader: NgxUiLoaderService, private router: Router) {}

  ngOnInit() {
    this.loading = false;
    this.getAllPeserta();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  getAllPeserta() {
    this.ngxLoader.start();
    this.userservice
      .getDataPeserta()
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        const data = result.data.filter((e: any) => {
          return e.role === 'peserta';
        });
        this.customers = data;
        this.ngxLoader.stop();
      });
  }

  status(value: boolean) {
    if (value) {
      return (this.data = `<span class="badge bg-success">Aktif</span>`);
    } else {
      return (this.data = `<span class="badge bg-danger">Tidak Aktif</span>`);
    }
  }
  updatePeserta(id: any) {
    this.ngxLoader.start();
    const data = {
      is_active_peserta: true,
    };
    this.userservice
      .UpdateDataPeserta(id, data)
      .pipe(finalize(() => {}))
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: result.msg,
          });
          this.router.navigate(['user']);
          this.ngxLoader.stop();
        } else {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });

          this.ngxLoader.stop();
        }
      });
  }
  DeletePeserta(id: any) {
    this.userservice
      .DeleteDataPeserta(id)
      .pipe(finalize(() => {}))
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: result.msg,
          });
          this.router.navigate(['user']);
          this.ngxLoader.stop();
        } else {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });

          this.ngxLoader.stop();
        }
      });
  }
}
