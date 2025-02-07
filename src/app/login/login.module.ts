import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [CommonModule, TranslateModule, LoginRoutingModule, NgbModule, SharedModule, FormsModule, NgxLoadingModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
