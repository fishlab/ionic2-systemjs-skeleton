import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountService} from "../../services/AccountService";
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
    }).catch(err=>{
      console.log(err);
      
    })

  }
}


