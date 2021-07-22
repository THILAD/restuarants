import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCreateIpPageRoutingModule } from './modal-create-ip-routing.module';

import { ModalCreateIpPage } from './modal-create-ip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCreateIpPageRoutingModule
  ],
  declarations: [ModalCreateIpPage]
})
export class ModalCreateIpPageModule {}
