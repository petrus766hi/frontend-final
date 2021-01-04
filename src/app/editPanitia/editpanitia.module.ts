import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EditPanitiaRoutingModule } from './editpanitia-routing.module';
import { EditPanitiaComponent } from './editpanitia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    EditPanitiaRoutingModule,
    NgbModule,
    FormsModule,
    CheckboxModule,
    NgxUiLoaderModule,
  ],
  declarations: [EditPanitiaComponent],
})
export class EditPanitiaModule {}
