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
  pageSize = 5;
  tournaments: Tournament[];
  constructor(private listlomba: ListLombaService) {}

  ngOnInit() {
    this.getDataTournament();
  }

  getDataTournament() {
    this.listlomba.getAllTournament().subscribe((res) => {
      this.tournaments = res.tournaments;
    });
  }
  pageChanged(event: any) {
    this.page = event;
  }
}
