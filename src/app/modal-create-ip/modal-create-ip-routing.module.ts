import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCreateIpPage } from './modal-create-ip.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCreateIpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCreateIpPageRoutingModule {}
