import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-lomba',
  templateUrl: './lomba.component.html',
  styleUrls: ['./lomba.component.scss'],
})
export class LombaComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  active = 1; 
  
  constructor() {}

  ngOnInit() {}
}
