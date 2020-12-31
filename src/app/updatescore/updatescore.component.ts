import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { result } from 'lodash';
import { finalize } from 'rxjs/operators';
import { UpdatescoreService } from './updatescore.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updatescore',
  templateUrl: './updatescore.component.html',
  styleUrls: ['./updatescore.component.scss'],
})
export class UpdateScoreComponent implements OnInit {
  id: any = '';
  public dataPeserta: any = {};
  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private UpdatescoreService: UpdatescoreService,
    private ngxLoader: NgxUiLoaderService
  ) {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getById(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  getById(id: any) {
    this.ngxLoader.start();
    this.UpdatescoreService.getDetail(id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        console.log('res', result.data);
        this.ngxLoader.stop();
        this.dataPeserta = result.data;
      });
  }

  updateScore(id: any) {
    this.UpdatescoreService.updateScore(id, this.dataPeserta)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        if (result.success) {
          this.ngxLoader.stop();
          Swal.fire({
            icon: 'success',
            title: result.msg,
          });
          this.router.navigate(['tournament']);
        } else {
          this.ngxLoader.stop();
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });
        }
      });
  }
}
