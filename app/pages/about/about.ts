import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "../../services/http";
import {api} from "../../services/config";
import {ProductSearchService, ProductDisplayService} from "../../services/product";


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private categories: any;
  private shop: any;
  private products: any;
  constructor(
    private navCtrl: NavController,
    private http: Http,
    private goodsService: ProductSearchService,
    private productDisplayService: ProductDisplayService
  ) {
    this.loadShopAndCategories();
  }

  loadShopAndCategories() {
    this.http.get(api('/user/shop/shop-and-categories'))
      .toPromise()
      .then(ret => {
        this.shop = ret.shop;
        this.categories = ret.categories;
      });
  }

  selecteCategory(category) {
    this.goodsService.search({ shop_category_id: category.id },1,15).then(ret => {
      this.products = ret.data;
    });
  }
}
