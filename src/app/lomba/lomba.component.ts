import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';
import { LombaService } from '../lomba/lomba.service';
import { finalize } from 'rxjs/operators';
import { DetailTournament } from '../models/lomba';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lomba',
  templateUrl: './lomba.component.html',
  styleUrls: ['./lomba.component.scss'],
})
export class LombaComponent {
  active = 1;
  query = '';
  public detail: any = {};
  public datas: any = [];
  public loading: boolean = false;
  public peserta: boolean;
  dataPeserta: Array<any>;
  response: Boolean = false;
  constructor(private ActivatedRoutes: ActivatedRoute, private LombaService: LombaService) {
    this.query = this.ActivatedRoutes.snapshot.paramMap.get('names');
  }

  ngOnInit() {
    this.getDetailsTournament();
    this.getPeserta();
  }
  getDetailsTournament() {
    this.LombaService.getDetailTournament(this.query)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((res) => {
        this.detail = res.tournaments;
        this.dataPeserta = res.tournaments.Id_Peserta;
      });
  }
  getPeserta() {
    let id = localStorage.getItem('id');
    this.LombaService.GetPeserta(id).subscribe((res) => {
      this.peserta = res.data.register;
    });
  }
  UpdatePesertaRegister() {
    let id = localStorage.getItem('id');
    let data = {
      register: true,
    };
    this.LombaService.UpdatePeserta(id, data).subscribe((res) => {
      console.log('update', res);
    });
  }

  registerLomba(value: any) {
    this.loading = true;
    if (value.Id_Peserta.length === value.JumlahPeserta) {
      Swal.fire({
        icon: 'error',
        title: 'Slot sudah Penuh',
      });
    } else {
      if (!this.peserta) {
        let data = {
          name: '',
          fase1: '',
          fase2: '',
          fase3: '',
        };
        this.LombaService.RegisterPeserta(value._id, data)
          .pipe(
            finalize(() => {
              console.log('done');
            })
          )
          .subscribe((res) => {
            console.log('xx', res);
            if (res.success) {
              this.loading = false;
              this.UpdatePesertaRegister();
              Swal.fire({
                icon: 'success',
                title: 'Berhasil Mendaftar Lomba',
                text: 'Selamat Anda Berhasil Mendaftar Lomba ',
              });
            } else {
              this.loading = false;
              Swal.fire({
                icon: 'error',
                title: res.msg,
              });
            }
          });
      } else {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Anda Sudah Tidak Bisa Daftar Ke 2x',
        });
      }
    }
  }
}
