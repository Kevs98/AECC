import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerdetailPage } from './partnerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerdetailPageRoutingModule {}
