import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [CommonModule, TranslateModule, EmailRoutingModule],
  declarations: [EmailComponent],
})
export class EmailModule {}
