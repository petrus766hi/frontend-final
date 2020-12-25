import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UpdateScoreRoutingModule } from './updatescore-routing.module';
import { UpdateScoreComponent } from './updatescore.component';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  imports: [CommonModule, TranslateModule, UpdateScoreRoutingModule, FormsModule, NgxUiLoaderModule],
  declarations: [UpdateScoreComponent],
})
export class UpdateScoreModule {}
