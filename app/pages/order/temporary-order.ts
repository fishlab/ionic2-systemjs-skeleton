import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderService} from '../../services/order';
import {Page} from '../page';
import {PaymentPage} from "./payment";

@Component({
  templateUrl: 'build/pages/order/temporary-order.html'
})
export class TemporaryOrderPage extends Page {
  // private orders: any = [];
  // private total: number;
  constructor(
    private navCtrl: NavController,
    private orderService: OrderService
  ) {
    super();
  }
  //first enter
  // ionViewLoaded() {
  //   console.log("I'm alive!");
  // }


  loadTemporarayOrders() {
    // this.orderService.getTemporarayOrders().then(ret => {
    //   this.orders = ret.orders;
    //   this.total = ret.total;
    // });
    this.orderService.getTemporarayOrders();
    
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

  checkout(order) {
    //todo checkout page
    this.navCtrl.push(PaymentPage, {
      order: order
    });
  }
}
