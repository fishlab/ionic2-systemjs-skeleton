import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountService} from "../../services/AccountService";
@Component({
  templateUrl: 'build/pages/home/sign-in.html',
  providers: [NavController, AccountService]

})
export class SignInPage {

  name = null;
  password = null;
  result = null;

  constructor(private navCtrl: NavController, private accountService: AccountService) {

  }

  signIn() {
    // console.log(this.accountService);
    this.accountService.signIn(this.name, this.password).subscribe(res => {
      this.result = res;
    },
      e => {
        this.result = e;
      }
    )

  }
}


