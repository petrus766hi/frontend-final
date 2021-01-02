import { Component, OnInit } from '@angular/core';
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
  constructor(public route: Router, public winnerservice: WinnerService) {}

  ngOnInit(): void {}

  updateWinner() {
    this.winnerservice.inputWinner(this.winnerLomba, this.id).subscribe((response: any) => {
      if (response.success) console.log('>>>>>>>>>', response);
    });
  }
}
