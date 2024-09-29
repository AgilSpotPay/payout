import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferModalPage } from './transfer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TransferModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferModalPageRoutingModule {}
