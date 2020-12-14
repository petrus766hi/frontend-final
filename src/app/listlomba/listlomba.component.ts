import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
import { ListLombaService } from '../listlomba/listlomba.service';
import { Tournament } from '../models/tournament';
@Component({
  selector: 'app-listlomba',
  templateUrl: './listlomba.component.html',
  styleUrls: ['./listlomba.component.scss'],
})
export class ListLombaComponent implements OnInit {
  version: string | null = environment.version;
  page = 1;
  pageSize = 10;
  tournaments: Tournament[];
  data = '';
  constructor(private listlomba: ListLombaService) {}

  ngOnInit() {
    this.getDataTournament();
  }

  getDataTournament() {
    this.listlomba.getAllTournament().subscribe((res) => {
      const active = res.tournaments.filter((e: any) => {
        return e.Is_active === true;
      });
      this.tournaments = active;
    });
  }
  pageChanged(event: any) {
    this.page = event;
  }
  status(value: boolean) {
    if (value) {
      return (this.data = `<span class="badge bg-success">Aktif</span>`);
    } else {
      return (this.data = `<span class="badge bg-danger">Tidak Aktif</span>`);
    }
  }
  avail(value: any, values: any) {
    if (value >= values.length) {
      return (this.data = `<span class="badge bg-success">Slot Masih Cukup</span>`);
    } else {
      return (this.data = `<span class="badge bg-danger">Slot Sudah Tidak Cukup</span>`);
    }
  }
}
