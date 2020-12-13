import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';
import { LombaService } from '../lomba/lomba.service';
import { finalize } from 'rxjs/operators';
import { DetailTournament } from '../models/lomba';
@Component({
  selector: 'app-lomba',
  templateUrl: './lomba.component.html',
  styleUrls: ['./lomba.component.scss'],
})
export class LombaComponent {
  active = 1;
  query = '';
  public detail: any = {};
  constructor(private ActivatedRoutes: ActivatedRoute, private LombaService: LombaService) {
    this.query = this.ActivatedRoutes.snapshot.paramMap.get('names');
  }

  ngOnInit() {
    this.getDetailsTournament();
  }
  getDetailsTournament() {
    this.LombaService.getDetailTournament(this.query)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((res) => {
        console.log('xxxss', res.tournaments);
        this.detail = res.tournaments;
      });
  }
}
