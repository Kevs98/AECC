import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AddclientePageRoutingModule } from './addcliente-routing.module';

import { AddclientePage } from './addcliente.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddclientePage]
})
export class AddclientePageModule {}
