import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Change_PasswordRoutingModule } from './change_password-routing.module';
import { Change_PasswordComponent } from './change_password.component';

@NgModule({
  imports: [CommonModule, TranslateModule, Change_PasswordRoutingModule],
  declarations: [Change_PasswordComponent],
})
export class Change_PasswordModule {}
