import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router: Router,
    public alertController: AlertController
    ) {
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ຂໍອະໄພ!',
      subHeader: 'ເບີ່ງໄດ້ສະເພາະແອັດມິ້ນ',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'ຍົກເລີກ',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ຕົກລົງ',
          handler: () => {
            console.log('Confirm Okay');
      this.router.navigate(['./tabs/Table']);

          }
        }
      ]
    });

    await alert.present();
  }


  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    const token = localStorage.getItem('role');
    console.log('check role',token);
    
    if (token=='m') {
      this.presentAlertConfirm()
      // this.router.navigate(['./tabs/Table']);
      return false;
    }else{
      console.log('no have role');
      
    }

    return true;
  }
}
