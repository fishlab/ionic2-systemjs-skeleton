import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountService} from "../../services/account_";
import {ProfilePage} from "./profile";

@Component({
  templateUrl: 'build/pages/home/sign-in.html'
})
export class SignInPage {

  name = null;
  password = null;
  result = null;

  constructor(private navCtrl: NavController, private accountService: AccountService) {

  }

  signIn() {
    // console.log(this.accountService);
    this.accountService.signIn(this.name, this.password).then(result => {
      this.result = result;
      this.navCtrl.push(ProfilePage);
    }).catch(err => {
      console.log(err);

    })

  }

  siginUp() {
    this.navCtrl.setRoot(SignUpPage);
  }
}

@Component({
  templateUrl: 'build/pages/home/sign-up.html'

})

export class SignUpPage {

  constructor(
    private navCtrl: NavController,
    private accountService: AccountService) {

  }
  siginIn() {
    this.navCtrl.setRoot(SignInPage);
  }
}


