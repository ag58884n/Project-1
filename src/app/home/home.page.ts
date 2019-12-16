import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public alertController: AlertController) {}
Proceed() {
    this.presentAlert();
}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: 'Still In Progress',
      buttons: ['OK']
    });

    await alert.present();
  }
}
