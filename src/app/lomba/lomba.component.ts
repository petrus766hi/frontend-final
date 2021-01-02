import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ActivatedRoute, Router } from '@angular/router';
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
  jumlahPeserta: number;
  dataPeserta: Array<any>;
  response: Boolean = false;
  is_group: Array<any>;
  data: Array<any>;
  constructor(private ActivatedRoutes: ActivatedRoute, private LombaService: LombaService, private router: Router) {
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
        console.log('xxx', res.tournaments.Is_group[0].is_group);
        this.jumlahPeserta = res.tournaments.JumlahPeserta;
        this.detail = res.tournaments;
        this.dataPeserta = res.tournaments.Id_Peserta;
        this.is_group = res.tournaments.Is_group;
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
    const token = localStorage.getItem('token');
    if (!token) {
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Anda Belum Register!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['login']);
        }
      });
    } else {
      if (value.Id_Peserta.length === value.JumlahPeserta) {
        this.loading = false;
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
                  text: 'Silahkan Tunggu Email Aktivasi Anda & Login Ulang',
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
}
