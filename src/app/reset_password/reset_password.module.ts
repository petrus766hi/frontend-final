import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Reset_PasswordRoutingModule} from './reset_password-routing.module';
import { Reset_PasswordComponent } from './reset_password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, Reset_PasswordRoutingModule, SharedModule, NgbModule, FormsModule],
  declarations: [Reset_PasswordComponent],
})
export class Reset_PasswordModule {}
