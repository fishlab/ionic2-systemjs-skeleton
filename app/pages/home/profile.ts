import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountService} from "../../services/AccountService";

@Component({
  templateUrl: 'build/pages/home/profile.html'
})
export class ProfilePage {

  constructor(private navCtrl: NavController, private accountService: AccountService) {

  }

}