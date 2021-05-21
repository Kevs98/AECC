import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevacajaPageRoutingModule } from './nuevacaja-routing.module';

import { NuevacajaPage } from './nuevacaja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevacajaPageRoutingModule
  ],
  declarations: [NuevacajaPage]
})
export class NuevacajaPageModule {}
