import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienthistoryPageRoutingModule } from './clienthistory-routing.module';

import { ClienthistoryPage } from './clienthistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienthistoryPageRoutingModule
  ],
  declarations: [ClienthistoryPage]
})
export class ClienthistoryPageModule {}
