import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignInPage} from './auth';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
      var signedIn = false;
      if (!signedIn){
        navCtrl.push(SignInPage);
      }
  }
}
