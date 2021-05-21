import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientdetailPage } from './clientdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ClientdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientdetailPageRoutingModule {}
