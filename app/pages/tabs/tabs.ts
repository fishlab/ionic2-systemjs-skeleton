import {Component} from '@angular/core';

import {IndexPage} from '../index/index';
import {HomePage} from '../home/home';
import {CategoryPage} from '../shop/category';
import {TemporaryOrderPage} from '../order/temporary-order';

import {AccountService, SiginEvent} from "../../services/account_";
import {OrderService} from "../../services/order";
declare var cordova
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {


  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private indexPage: any;

  // private temporyOrderProducts = null;

  constructor(
    private accountService: AccountService,
    private orderService: OrderService,
    private siginEvent: SiginEvent
  ) {
    // this tells the tabs component which Pages
    // should be each tab's root Page

    this.indexPage = IndexPage;

    this.tab1Root = HomePage;
    this.tab2Root = CategoryPage;
    this.tab3Root = TemporaryOrderPage;

    this.checkStatus();
  }

  private checkStatus() {

    this.siginEvent.subscribe(user => {
      console.log('subscribe on sign event with user:', user);
      this.showTabBadges();
    })
    this.accountService.getStatus().then(user => {
      this.showTabBadges();
    })

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      cordova.plugins.notification.local.schedule({
        id: 1,
        title: "测试一下 Production Jour fixe",
        text: "Duration 1h",
        // firstAt: monday_9_am,
        // every: "week",
        // sound: "file://sounds/reminder.mp3",
        // icon: "http://icons.com/?cal_id=1",
        data: { meetingId: "123#fg8" }
      });
    }

  }

  private showTabBadges() {
    console.log('----===', this.accountService.authenticated());

    if (this.accountService.authenticated()) {
      this.orderService.getTemporarayOrders();
    }
  }
}
