import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.page.html',
  styleUrls: ['./infopage.page.scss'],
})
export class InfopagePage implements OnInit {
  user: any;
  // tslint:disable-next-line:max-line-length
  constructor(public modalController: ModalController,  public fAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, public alertController: AlertController) {
  /*  this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.name = this.router.getCurrentNavigation().extras.state.name;
      }
    });*/
  }

  ngOnInit() {
    console.log(`${this.user}`);
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  async Delete() {
    const user = await this.fAuth.auth.currentUser;
    user.delete().then(r => this.closeModal());
    console.log('in Delete');
  }
  async Logout() {
    this.presentAlert()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: 'Logout In Progress',
      buttons: ['OK']
    });

    await alert.present();
  }
}
