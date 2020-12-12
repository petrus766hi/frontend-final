import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import 'jquery';
declare var $: any;
declare global {
  interface JQuery {
    (JQuery: any): JQuery;
    bracket(options: any): JQuery;
  }
}
@Component({
  selector: 'app-lomba',
  templateUrl: './lomba.component.html',
  styleUrls: ['./lomba.component.scss'],
})
export class LombaComponent {
  version: string | null = environment.version;
  isLoading = false;
  active = 1;
  minimalData = {
    teams: this.cucok(),
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
  };
  constructor() {}
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
    $('#minimal').bracket({
      init: this.minimalData /* data to initialize the bracket with */,
    });
    // this.cucok();
  }
}
