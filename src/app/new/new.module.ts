import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NewRoutingModule],
  declarations: [NewComponent],
})
export class NewModule {}
