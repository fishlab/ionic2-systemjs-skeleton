import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Page} from "../page";
import {Http} from '../../services/http';

@Component({
  templateUrl: 'build/pages/home/contact-edit.html'
})
export class ContactEditPage extends Page{
  private contact = {};
  constructor(
    private navCtrl: NavController,
    private params: NavParams,

    private http:Http
  ) {
    super();
  }

  onPageWillEnter() {
    this.contact = this.params.get('contact');
  }

}
