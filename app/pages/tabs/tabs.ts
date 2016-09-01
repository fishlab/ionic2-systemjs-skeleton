import {Component} from '@angular/core';

import {IndexPage} from '../index/index';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';

import {AccountService,SiginEvent} from "../../services/account_";
import {OrderService} from "../../services/order";

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
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;

    this.checkStatus();
  }

  private checkStatus() {

    this.siginEvent.subscribe(user =>{
      console.log('subscribe on sign event with user:',user);
      this.showTabBadges();
    })
    this.accountService.getStatus().then(user => {
      this.showTabBadges();
    })
  }

  private showTabBadges() {
    console.log('----===', this.accountService.authenticated());

    if (this.accountService.authenticated()) {
      this.orderService.getTemporarayOrders();
    }
  }
}
