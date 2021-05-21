import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienthistoryPage } from './clienthistory.page';

const routes: Routes = [
  {
    path: '',
    component: ClienthistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienthistoryPageRoutingModule {}
