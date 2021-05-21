import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseboxPage } from './closebox.page';

const routes: Routes = [
  {
    path: '',
    component: CloseboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseboxPageRoutingModule {}
