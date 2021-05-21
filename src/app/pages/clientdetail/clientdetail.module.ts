import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientdetailPageRoutingModule } from './clientdetail-routing.module';

import { ClientdetailPage } from './clientdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientdetailPageRoutingModule
  ],
  declarations: [ClientdetailPage]
})
export class ClientdetailPageModule {}
