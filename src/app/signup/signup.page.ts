import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {NavigationExtras, Route, Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  password: string = '';
  confirmpassword;
  name;
  usernames;

  // tslint:disable-next-line:max-line-length
  constructor(public modalController: ModalController, public alertController: AlertController, public fAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  async SignUp() {
    const {username, password, confirmpassword} = this;
    if (password !== confirmpassword) {
      this.presentAlert();
    }
    try {
      const res = await this.fAuth.auth.createUserWithEmailAndPassword(username, password);
      this.closeModal();
    } catch (e) {
      this.presentAlert();
    }
    this.closeModal();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: 'Error',
      buttons: ['OK']
    });

    await alert.present();
  }
}
