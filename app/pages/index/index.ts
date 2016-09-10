import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {ProductSearchService} from "../../services/product";
import {DetailPage} from './detail';
import {OrderService} from "../../services/order";
import {Page} from "../page";
@Component({
  templateUrl: 'build/pages/index/index.html'
})
export class IndexPage  extends Page{
  private products: Array<any> = [];
  private page: any = 1;
  private search:any={};
  constructor(private navCtrl: NavController,
    private goodsService: ProductSearchService,
    private orderService: OrderService,
    private toastCtrl: ToastController

  ) {
    super();
    this.loadProducts();
  }


  loadProducts() {
    return this.goodsService.search(this.search,this.page, 15).then(result => {
      // this.products.splice(0,this.products.length);
      for (let p of result.data) {
        this.products.push(p);
      }
      this.page = result.current_page;
      // this.products = ;
      return 1;
    })
  }
  //mock
  loadProductsMock() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        // this.products =[];
        for (var i = 0; i < 10; i++) {
          this.products.push({
            id: this.page * 10 + i,
            name: "product" + (this.page * 10 + i),
            unit_price: 2.15
          });
        }
        resolve();


      }, 1500);

    })
  }

  // myHeaderFn(record, recordIndex, records) {
  //   if (recordIndex % 20 === 0) {
  //     return 'Header ' + recordIndex;
  //   }
  //   return null;
  // }

  openDetail(product) {
    this.navCtrl.push(DetailPage);
  }

  temporaryOrderAdd(product) {
    this.orderService.temporaryOrderAdd(product).then(() => {
      let toast = this.toastCtrl.create({
        position: 'top',
        message: '已加入购物车',
        duration: 1500
      });
      toast.present();
    });
  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, page is currently ', this.page);
    this.page += 1;
    this.loadProducts().then((r) => {
      console.log(r);
      infiniteScroll.complete();
    })
      .catch(console.log);

  }
}
