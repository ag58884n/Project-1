import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {SignupPage} from '../signup/signup.page';
import {SignupPageModule} from '../signup/signup.module';
import {AngularFireAuth} from '@angular/fire/auth';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {InfopagePage} from '../infopage/infopage.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  username: string = '';
  password: string = '';
  user;
  // tslint:disable-next-line:max-line-length
  constructor(public modalController: ModalController, public alertController: AlertController, public fAuth: AngularFireAuth, public router: Router, private route: ActivatedRoute) {
      /*this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.names = this.router.getCurrentNavigation().extras.state.name;
      }
    });*/
  }

  ngOnInit() {
  }
  async Signup() {
    const modal = await this.modalController.create({
      component: SignupPage
    });
    return await modal.present();
  }
  async SignIn() {
    try {
      const res = await this.fAuth.auth.signInWithEmailAndPassword(this.username, this.password);
      this.presentAlert2();
      console.log(res);
      console.log(res.user.email);
      this.user = res.user.email;
    } catch (e) {
      console.dir(e);
      console.log(e);
      this.presentAlert3(e);
    }
  }
 async infomodal() {
    console.log('in person info');
    /*const navigationExtras: NavigationExtras = {
         state: {
             user: this.user
         }
     };
    this.router.navigate(['/infopage'], navigationExtras);*/
    const modal = await this.modalController.create({
    component: InfopagePage,
        componentProps: {
            user: this.user,
        }
  });
    return await modal.present();
 }
  SignInwithGoogle() {
    this.presentAlert();
  }
  SignInwithFacebook() {
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
    async presentAlert2() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: '',
            message: 'Signed In',
            buttons: ['OK']
        });

        await alert.present();
    }
    async presentAlert3(e) {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: '',
            message: e,
            buttons: ['OK']
        });

        await alert.present();
    }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
