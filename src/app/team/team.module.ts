import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [CommonModule, TranslateModule, TeamRoutingModule, SharedModule, NgbModule, FormsModule, NgxLoadingModule],
  declarations: [TeamComponent],
})
export class TeamModule {}
