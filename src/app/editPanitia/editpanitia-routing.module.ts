import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { EditPanitiaComponent } from './editpanitia.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts

  { path: '', component: EditPanitiaComponent, data: { title: marker('EditPan') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class EditPanitiaRoutingModule {}
