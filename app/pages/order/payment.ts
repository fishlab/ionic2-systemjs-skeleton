import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {OrderService} from '../../services/order';
import {Http} from '../../services/http';

import {Page} from '../page';
@Component({
  templateUrl: 'build/pages/order/payment.html'
})
export class PaymentPage extends Page {
    private order ;
    constructor(
        private navController: NavController,
        private params: NavParams,
        private http:Http
    ) {
        super();
        this.order = params.get('order');
    }

    paymentMock(){
        this.http.post( this.userApi('/order/payment-mock') , this.order)
            .toPromise()
            .then(result =>{

            })
        
    }


}