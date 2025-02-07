import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { DetailPesertaComponent } from './detailPeserta.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts

  { path: '', component: DetailPesertaComponent, data: { title: marker('DetailPeserta') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DetailPesertaRoutingModule {}
