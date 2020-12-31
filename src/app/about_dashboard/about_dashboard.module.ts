import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { About_DashboardRoutingModule } from './about_dashboard-routing.module';
import { About_DashboardComponent } from './about_dashboard.component';

import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from 'primeng/card';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    About_DashboardRoutingModule,
    ButtonModule,
    CardModule,
    NgbModule,
    NgxUiLoaderModule,
  ],
  declarations: [About_DashboardComponent],
})
export class About_DashboardModule {}
