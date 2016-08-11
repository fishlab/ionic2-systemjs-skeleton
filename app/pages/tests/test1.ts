import
{Page, NavController, NavParams}
from 'ionic-angular'
import {Injectable} from "@angular/core"
import {SamplePage} from './sampePage'

@Page({
    templateUrl: 'build/pages/tests/test1.html'
})
export class Test1 {
    nav: NavController;
    static get parameters() {
        return [[NavController], [NavParams]]
    }

    constructor(nav, navParams) {
        this.nav = nav
        console.log(navParams)
    }


    open() {
        // main()
        console.log('wo la la ');
        this.nav.push(SamplePage);
    }


}

// async function main() {
//  await ping();
// }

// async function ping() {
//  for (var i = 0; i < 10; i++) {
//   await delay(300);
//   console.log('ping');
//  }
// }

// function delay(ms: number) {
//  return new Promise( (resolve) => setTimeout(resolve, ms));
// }
