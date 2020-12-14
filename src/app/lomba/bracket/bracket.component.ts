import { Component, OnInit, Input } from '@angular/core';
import 'jquery';
import * as _ from 'lodash';
declare var $: any;
declare global {
  interface JQuery {
    (JQuery: any): JQuery;
    bracket(options: any): JQuery;
  }
}
@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
})
export class BracketComponent implements OnInit {
  data: any = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8'];
  teams: any = [];

  @Input() dataPeserta: [];
  @Input() jumlahPeserta: number;

  constructor() {}
  grupsName() {
    let data: any = _.get(this, 'dataPeserta', []);
    const aa = data.map((e: any) => {
      return e.name;
    });
    return aa;
  }
  fase1() {
    let data: any = _.get(this, 'dataPeserta', []);
    const aa = data.map((e: any) => {
      return e.fase1;
    });

    return aa;
  }
  fase2() {
    let tmp: any = [];
    let data: any = _.get(this, 'dataPeserta', []);
    data.map((e: any) => {
      if (e.fase2 > 1) {
        tmp.push(e.fase2);
      }
    });
    return tmp;
  }
  fase3() {
    let tmp: any = [];
    let data: any = _.get(this, 'dataPeserta', []);
    data.map((e: any) => {
      if (e.fase3 > 1) {
        tmp.push(e.fase3);
      }
    });
    return tmp;
  }
  ngOnInit() {
    if (this.jumlahPeserta == 4) {
      let resizeParameters = {
        teamWidth: 80,
        scoreWidth: 80,
        matchMargin: 80,
        roundMargin: 80,
        init: {
          teams: _.chunk(this.grupsName(), 2),
          results: [[_.chunk(this.fase1(), 2), _.chunk(this.fase2(), 2)]],
        },
      };
      $('#minimal').bracket(resizeParameters);
    } else if (this.jumlahPeserta == 8) {
      let resizeParameters = {
        teamWidth: 80,
        scoreWidth: 80,
        matchMargin: 80,
        roundMargin: 80,
        init: {
          teams: _.chunk(this.grupsName(), 2),
          results: [[_.chunk(this.fase1(), 2), _.chunk(this.fase2(), 2), _.chunk(this.fase3(), 2)]],
        },
      };
      $('#minimal').bracket(resizeParameters);
    }
  }
}
