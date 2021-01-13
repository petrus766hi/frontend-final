import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  @Input() dataPeserta: [];
  constructor() {}

  ngOnInit(): void {
    console.log('xxx', this.dataPeserta);
  }
}
