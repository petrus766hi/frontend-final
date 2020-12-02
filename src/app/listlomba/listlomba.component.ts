import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-listlomba',
  templateUrl: './listlomba.component.html',
  styleUrls: ['./listlomba.component.scss'],
})
export class ListLombaComponent implements OnInit {
  version: string | null = environment.version;
  page = 4;

  constructor() {}

  ngOnInit() {}
}
