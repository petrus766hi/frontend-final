import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peserta',
  templateUrl: './peserta.component.html',
  styleUrls: ['./peserta.component.scss'],
})
export class PesertaComponent implements OnInit {
  constructor() {}
  @Input() data: {};
  @Input() team: '';
  ngOnInit(): void {
    console.log('data', this.data);
  }
}
