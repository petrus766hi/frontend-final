import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [CommonModule, TranslateModule, RegisterRoutingModule, NgbModule, SharedModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
