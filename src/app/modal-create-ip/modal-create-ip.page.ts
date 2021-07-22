import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { APIService } from "src/service/api.service";
import { PreloadingStrategy, Route } from '@angular/router';
@Component({
  selector: 'app-modal-create-ip',
  templateUrl: './modal-create-ip.page.html',
  styleUrls: ['./modal-create-ip.page.scss'],
})
export class ModalCreateIpPage implements OnInit {
public ip:string
  constructor( 
    public modal: ModalController,
    public api:APIService,
    private loader: PreloadingStrategy,
  ) { }

  ngOnInit() {
  }
  saveip(){
    localStorage.setItem('myip',this.ip+":81")
    this.api.ip = this.ip
    console.log(this.api.ip,'set ip');
    alert('set IP OK'+this.api.ip,)
    this.modal.dismiss()
    // this.loader.preLoadRoute('/sdsds')
  }

  keyupGetip(e: KeyboardEvent) {
    this.ip = (e.target as HTMLInputElement).value
  
  }

}
