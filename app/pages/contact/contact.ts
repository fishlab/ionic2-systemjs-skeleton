import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Http } from '../../services/http';
import {api} from '../../services/config';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  private orders: any = [];
  constructor(private navCtrl: NavController, private http: Http) {
  }
  //first enter
  // ionViewLoaded() {
  //   console.log("I'm alive!");
  // }


  loadTemporarayOrders() {
    this.http.post(api('/user/order/temporary-orders'), null).toPromise().then(orders => {
      this.orders = orders;
    });
  }

  //every enter
  onPageWillEnter() {
    console.log('****on page will enter messages pane');
    this.loadTemporarayOrders();
  }
}
