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

  constructor() {}
  grupsName() {
    let data: any = _.get(this, 'dataPeserta', []);
    const aa = data.map((e: any) => {
      return e.name;
    });
    return aa;
  }

  cucok() {
    let data: any = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8'];
    let arr: any = [];
    let tmp: any = [];
    let max: number = 2;
    data.map((x: any, i: any) => {
      if (tmp.length < max) {
        tmp.push(x);
      } else {
        tmp = [];
        tmp.push(x);
      }

      if (tmp.length == max) {
        // console.log(tmp)
        arr.push(tmp);
      } else if (i == data.length - 1) {
        arr.push(tmp);
      }
    });
    return arr;
  }

  ngOnInit() {
    let resizeParameters = {
      teamWidth: 100,
      scoreWidth: 100,
      matchMargin: 100,
      roundMargin: 100,
      init: {
        teams: _.chunk(this.grupsName(), 2),
        results: [
          [
            [
              [null, null],
              [null, null],
              [null, null],
              [null, null],
            ],
            [
              [null, null],
              [null, 4],
            ],
            [
              [null, null],
              [null, null],
            ],
          ],
        ],
      },
    };
    $('#minimal').bracket(resizeParameters);
  }
}
