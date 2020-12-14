import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Profile_UpdateRoutingModule } from './profile_update-routing.module';
import { Profile_UpdateComponent } from './profile_update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Profile_UpdateRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    NgxLoadingModule,
  ],
  declarations: [Profile_UpdateComponent],
})
export class Profile_UpdateModule {}
