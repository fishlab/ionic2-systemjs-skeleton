import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "../../services/http";
import {api} from "../../services/config";
@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private categories:any;
  private shop:any;
  constructor(private navCtrl: NavController,
  private http: Http
  ) {
    this.loadShopAndCategories();
  }

  loadShopAndCategories(){
    this.http.get( api('/user/shop/shop-and-categories'))
    .toPromise()
    .then( ret =>{
      this.shop = ret.shop;
      this.categories = ret.categories;
    });
  }
}
