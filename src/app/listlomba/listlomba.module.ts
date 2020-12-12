import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ListLombaRoutingModule } from './listlomba-routing.module';
import { ListLombaComponent } from './listlomba.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ListLombaRoutingModule],
  declarations: [ListLombaComponent],
})
export class ListLombaModule {}
