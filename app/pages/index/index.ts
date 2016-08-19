import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GoodsSearchService} from "../../services/goods";
@Component({
  templateUrl: 'build/pages/index/index.html'
})
export class IndexPage {
  private products:any =[];
  constructor(private navCtrl: NavController,private goodsService:GoodsSearchService) {
    this.loadProducts();
  }


  loadProducts(){
    this.goodsService.search().then(products =>{
//       for(let p of products){
// this.products.push(p);
//       }
        this.products = products;
    })
  }
}
