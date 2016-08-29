import { Http } from './http';
import { Injectable } from "@angular/core"
import {Subscription, Observable} from 'rxJs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import {config} from './config';



@Injectable()
export class GoodsSearchService {
    //todo configurable
    private url = '/user/index/products';  // URL to web API
    // protected headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(protected http: Http) {

    }

    async search(page:number = 0,page_size:number = 20 ) {
        var goodsList = await this.http.post(config.api_base_url+this.url,{
            page:page,
            page_size:page_size
        })
            // .map(res => res.json())
            // .map(goodsList => {
            //     goodsList.forEach(goods => {
            //         goods.id = goods._id;
            //     });
            //     return goodsList;
            // })
            .toPromise();
        return goodsList;
    }
}