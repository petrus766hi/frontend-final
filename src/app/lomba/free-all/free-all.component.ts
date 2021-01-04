import { Component, OnInit, Input } from '@angular/core';
import { af } from 'date-fns/locale';

@Component({
  selector: 'app-free-all',
  templateUrl: './free-all.component.html',
  styleUrls: ['./free-all.component.scss'],
})
export class FreeAllComponent implements OnInit {
  @Input() dataPeserta: [];
  dataPemenang: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.getPemenang();
  }
  getPemenang() {
    this.dataPeserta.sort((a: any, b: any) => {
      return b.fase2 - a.fase2;
    });
  }
}
