import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferModalPageRoutingModule } from './transfer-modal-routing.module';

import { TransferModalPage } from './transfer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferModalPageRoutingModule
  ],
  declarations: [TransferModalPage]
})
export class TransferModalPageModule {}
