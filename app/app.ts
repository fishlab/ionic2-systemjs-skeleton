import {ionicBootstrap, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
ionicBootstrap(MyApp, [], {
  activator: 'highlight',

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
  // http://ionicframework.com/docs/v2/api/config/Config/
});
// http://ionicframework.com/docs/v2/api/config/Config/
