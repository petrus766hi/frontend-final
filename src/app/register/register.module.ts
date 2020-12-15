import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgxLoadingModule,
    RegisterRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
