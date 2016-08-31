import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductSearchService,ProductDisplayService} from "../../services/product";
import {DetailPage} from './detail';

@Component({
  templateUrl: 'build/pages/index/index.html'
})
export class IndexPage {
  private products: Array<any> = [];
  private page: any = 1;

  constructor(private navCtrl: NavController,
    private goodsService: ProductSearchService,
    private productDisplayService: ProductDisplayService
    ) {
    this.loadProducts();
  }


  loadProducts() {
    return this.goodsService.search(this.page, 5).then(result => {
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
