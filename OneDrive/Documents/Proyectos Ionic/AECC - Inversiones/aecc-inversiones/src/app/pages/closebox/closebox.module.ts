import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseboxPageRoutingModule } from './closebox-routing.module';

import { CloseboxPage } from './closebox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloseboxPageRoutingModule
  ],
  declarations: [CloseboxPage]
})
export class CloseboxPageModule {}
