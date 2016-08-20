import { Http, Response, Headers  } from '@angular/http';
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

    async search() {
        var goodsList = await this.http.post(config.api_base_url+this.url,{"es":"6"})
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