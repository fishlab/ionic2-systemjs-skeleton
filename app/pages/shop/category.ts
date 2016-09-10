import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "../../services/http";
import {api} from "../../services/config";
import {Page} from "../page";
import {ProductSearchService} from "../../services/product";


@Component({
  templateUrl: 'build/pages/shop/category.html'
})
export class CategoryPage extends Page {
  private categories: any;
  private category: any;
  private shop: any;
  private products: any;
  private page: any = 1;

  constructor(
    private navCtrl: NavController,
    private http: Http,
    private goodsService: ProductSearchService
  ) {
    super();
    this.products = [];
    this.loadShopAndCategories();
    this.selecteCategory(null);

  }

  loadShopAndCategories() {
    this.http.get(api('/user/shop/shop-and-categories'))
      .toPromise()
      .then(ret => {
        this.shop = ret.shop;
        this.categories = ret.categories
        .concat(ret.categories)
        .concat(ret.categories)
        .concat(ret.categories)
        
      });
  }

  selecteCategory(category) {
    this.category = category;
    this.searchProducts();
  }


  searchProducts() {
    var search = {};
    if (this.category) {
      Object.assign(search, { shop_category_id: this.category.id });
    }
    return this.goodsService.search(search, this.page, 25).then(result => {
      // this.products.splice(0,this.products.length);
      for (let p of result.data) {
        this.products.push(p);
      }
      this.page = result.current_page;
      // this.products = ;
      return 1;
    })
  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, page is currently ', this.page);
    this.page += 1;
    this.searchProducts().then((r) => {
      infiniteScroll.complete();
    })
      .catch(console.log);

  }

}
