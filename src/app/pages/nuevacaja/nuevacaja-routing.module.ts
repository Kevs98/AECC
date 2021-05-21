import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevacajaPage } from './nuevacaja.page';

const routes: Routes = [
  {
    path: '',
    component: NuevacajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevacajaPageRoutingModule {}
