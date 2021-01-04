import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, TranslateModule, TableRoutingModule],
  declarations: [TableComponent],
})
export class TableModule {}
