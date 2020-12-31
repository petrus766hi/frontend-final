import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { LombaRoutingModule } from './lomba-routing.module';
import { LombaComponent } from './lomba.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BracketComponent } from './bracket/bracket.component';

import { NgxLoadingModule } from 'ngx-loading';
import { WinnerComponent } from './winner/winner.component';
import { PesertaComponent } from './peserta/peserta.component';

@NgModule({
  imports: [CommonModule, TranslateModule, LombaRoutingModule, NgbModule, SharedModule, NgxLoadingModule],
  declarations: [LombaComponent, BracketComponent, WinnerComponent, PesertaComponent],
})
export class LombaModule {}
