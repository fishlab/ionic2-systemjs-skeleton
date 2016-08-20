import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {SignInPage} from './auth';
import {ProfilePage} from "./profile";
import {OrderPage} from './order';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
    //tests
    // this.navCtrl.push(OrderPage);
    // return;
    var signedIn = !true;
    if (!signedIn) {
      this.navCtrl.push(SignInPage);
    } else {
      this.navCtrl.push(ProfilePage);
    }

  }
}
