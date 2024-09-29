import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferModalPagePageRoutingModule } from './transfer-modal-page-routing.module';

import { TransferModalPagePage } from './transfer-modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferModalPagePageRoutingModule
  ],
  declarations: [TransferModalPagePage]
})
export class TransferModalPagePageModule {}
