import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { WinnerService } from '../../services/winner.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss'],
})
export class WinnerComponent implements OnInit {
  public winnerLomba: any = {};
  id: any = '';
  @Input() winner: Array<any>;
  @Input() juara: any;
  constructor(public route: Router, public winnerservice: WinnerService) {}

  ngOnInit(): void {
    console.log('juara', this.juara.juara1);
  }

  // updateWinner() {
  //   this.winnerservice.inputWinner(this.winnerLomba, this.id).subscribe((response: any) => {});
  // }
}
