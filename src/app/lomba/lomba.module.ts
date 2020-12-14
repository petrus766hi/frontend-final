import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { LombaRoutingModule } from './lomba-routing.module';
import { LombaComponent } from './lomba.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BracketComponent } from './bracket/bracket.component';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [CommonModule, TranslateModule, LombaRoutingModule, NgbModule, SharedModule, NgxLoadingModule],
  declarations: [LombaComponent, BracketComponent],
})
export class LombaModule {}
