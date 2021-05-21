import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerdetailPageRoutingModule } from './partnerdetail-routing.module';

import { PartnerdetailPage } from './partnerdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerdetailPageRoutingModule
  ],
  declarations: [PartnerdetailPage]
})
export class PartnerdetailPageModule {}
