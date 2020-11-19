import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { LombaRoutingModule } from './lomba-routing.module';
import { LombaComponent } from './lomba.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [CommonModule, TranslateModule, LombaRoutingModule, NgbModule, SharedModule],
  declarations: [LombaComponent],
})
export class LombaModule {}
