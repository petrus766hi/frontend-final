import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Change_PwdRoutingModule } from './change_pwd-routing.module';
import { Change_PwdComponent } from './change_pwd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, Change_PwdRoutingModule, SharedModule, NgbModule, FormsModule],
  declarations: [Change_PwdComponent],
})
export class Change_PwdModule {}
