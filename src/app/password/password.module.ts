import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, PasswordRoutingModule, NgbModule, SharedModule, FormsModule],
  declarations: [PasswordComponent],
})
export class PasswordModule {}
