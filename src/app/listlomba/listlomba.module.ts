import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ListLombaRoutingModule } from './listlomba-routing.module';
import { ListLombaComponent } from './listlomba.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, TranslateModule, ListLombaRoutingModule, NgbModule],
  declarations: [ListLombaComponent],
})
export class ListLombaModule {}
