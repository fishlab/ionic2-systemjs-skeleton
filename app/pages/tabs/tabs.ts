import {Component} from '@angular/core';

import {IndexPage} from '../index/index';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';



@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {


  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private indexPage:any;
  private n = 2;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page

    this.indexPage = IndexPage;

    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }
}
