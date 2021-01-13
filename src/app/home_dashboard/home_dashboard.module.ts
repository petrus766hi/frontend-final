import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Home_DashboardRoutingModule } from './home_dashboard-routing.module';
import { Home_DashboardComponent } from './home_dashboard.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorModule } from 'primeng/editor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    Home_DashboardRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DialogModule,
    AngularEditorModule,
    EditorModule,
    NgxUiLoaderModule,
  ],
  declarations: [Home_DashboardComponent, ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home_DashboardModule {}
