import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { result } from 'lodash';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DetailPesertaService } from './detail-peserta.service';
import { Peserta } from './peserta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailpeserta',
  templateUrl: './detailPeserta.component.html',
  styleUrls: ['./detailPeserta.component.scss'],
})
export class DetailPesertaComponent implements OnInit {
  id: any = '';
  idParams: any = '';
  peserta: Peserta[];
  loading: boolean = true;

  activityValues: number[] = [0, 100];
  UpdatescoreService: any;
  constructor(
    private activeroute: ActivatedRoute,
    private DetailPesertaService: DetailPesertaService,
    private router: Router,
    private ngxLoader: NgxUiLoaderService
  ) {
    this.id = this.activeroute.snapshot.queryParams.idTournament;
    this.idParams = this.activeroute.snapshot.queryParams.idTournaments;
  }

  ngOnInit() {
    this.loading = false;
    this.getTournamentId(this.id);
  }

  getTournamentId(id: any) {
    this.ngxLoader.start();
    this.DetailPesertaService.getDataTournamentDetail(id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        this.ngxLoader.stop();
        this.peserta = result.data.tournaments.Id_Peserta;
      });
  }
  updateScore() {
    // console.log('xxx', this.peserta);
    // console.log('id', this.idParams);
    this.DetailPesertaService.updateWinner('5fd854fc4fe86500176bebf7', this.peserta).subscribe((result) => {
      console.log('xxx', result);
    });

    //   this.DetailPesertaService.updateScore(this.peserta)
    //     .pipe(
    //       finalize(() => {
    //         console.log('done');
    //       })
    //     )
    //     .subscribe((result) => {
    //       if (result.success) {
    //         this.ngxLoader.stop();
    //         Swal.fire({
    //           icon: 'success',
    //           title: result.msg,
    //         });
    //         this.router.navigate(['tournament']);
    //       } else {
    //         this.ngxLoader.stop();
    //         Swal.fire({
    //           icon: 'error',
    //           title: result.msg,
    //         });
    //       }
    //     });
  }
}
