import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [CommonModule, TranslateModule, PasswordRoutingModule],
  declarations: [PasswordComponent],
})
export class PasswordModule {}
