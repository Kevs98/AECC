import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableclosePageRoutingModule } from './availableclose-routing.module';

import { AvailableclosePage } from './availableclose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableclosePageRoutingModule
  ],
  declarations: [AvailableclosePage]
})
export class AvailableclosePageModule {}
