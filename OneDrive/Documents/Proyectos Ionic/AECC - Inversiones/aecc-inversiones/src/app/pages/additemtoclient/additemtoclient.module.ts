import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditemtoclientPageRoutingModule } from './additemtoclient-routing.module';

import { AdditemtoclientPage } from './additemtoclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdditemtoclientPageRoutingModule
  ],
  declarations: [AdditemtoclientPage]
})
export class AdditemtoclientPageModule {}
