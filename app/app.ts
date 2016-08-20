import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {providers} from "./providers";
import {enableProdMode} from '@angular/core';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

// http://ionicframework.com/docs/v2/api/config/Config/

let config = {
  // activator: 'highlight',

  tabbarPlacement: 'bottom',

  tabbarLayout: 'icon-right',
  tabSubPages: false,
  pageTransition: 'ios',


  platforms: {
    android: {
      pageTransitionDelay: 0// No More Page Transition Delays
    },
    ios: {
      pageTransitionDelay: 0// Allows for navigation through Tab Pages
    }
  }
  // platforms: {
  //   ios: {
  //     tabbarPlacement: 'top',
  //   },

  //   android:{
  //     tabbarPlacement:'bottom'
  //   }
  // }
}
enableProdMode();
ionicBootstrap(MyApp, providers, config);
// http://ionicframework.com/docs/v2/api/config/Config/
