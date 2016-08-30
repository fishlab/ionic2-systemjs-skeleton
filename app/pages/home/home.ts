import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {SignInPage} from './auth';
import {ProfilePage} from "./profile";
import {OrderPage} from './order';

import { Http } from '../../services/http';
import {api} from '../../services/config';

@Component({
  templateUrl: 'build/pages/home/empty.html'
})
export class HomePage {
  constructor(private navCtrl: NavController,
    private http: Http
  ) {
    //tests
    // this.navCtrl.push(OrderPage);
    // return;

    http.get(api('/auth/status')).toPromise().then(ret => {
      var signedIn = ret.user;
      if (!signedIn) {
        this.navCtrl.setRoot(SignInPage);
      } else {
        this.navCtrl.setRoot(ProfilePage);
        // this.navCtrl.pop();        
        
      }
    });



  }
}
