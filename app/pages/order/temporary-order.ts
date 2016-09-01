import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderService} from '../../services/order';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class TemporaryOrderPage {
  private orders: any = [];
  constructor(private navCtrl: NavController,
    private orderService: OrderService
    ) {
  }
  //first enter
  // ionViewLoaded() {
  //   console.log("I'm alive!");
  // }


  loadTemporarayOrders() {
    this.orderService.getTemporarayOrders().then(orders => {
      this.orders = orders;
    });
  }

  //every enter
  onPageWillEnter() {
    console.log('*** on page will enter messages pane');
    this.loadTemporarayOrders();
  }

  private async setAmount(item, newAmount) {
    return this.orderService.temporarayOrderSetAmount(item, newAmount);
  }

  private addAmount(item) {
    return this.setAmount(item, item.amount + 1);
  }

  private removeAmount(item) {
    return this.setAmount(item, item.amount - 1);
  }
}
