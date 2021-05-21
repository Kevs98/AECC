import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditemtoclientPage } from './additemtoclient.page';

const routes: Routes = [
  {
    path: '',
    component: AdditemtoclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditemtoclientPageRoutingModule {}
