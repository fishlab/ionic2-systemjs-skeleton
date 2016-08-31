import {Injectable} from '@angular/core';
import {Http} from "./http";
import {api} from "./config";

@Injectable()
export class OrderService {
    public temporyOrderProductAmount: number;
    private temporaryOrders;
    constructor(private http: Http) {

    }

    countAndUpdateTemporyOrderProductAmount() {
        var countAmounts = (orders) => {
            var amount = 0;
            orders.forEach(order => {
                order.items.forEach(item => {
                    amount += item.amount;
                })
            });
            return amount;
        }
        this.temporyOrderProductAmount = countAmounts(this.temporaryOrders);
    }

    // getTemporyOrderProductAmount() {
    //     this.getTemporarayOrders().then(orders => {
    //         this.countAndUpdateTemporyOrderProductAmount();
    //     })
    // }

    getTemporarayOrders() {
        return this.http.post(api('/user/order/temporary-orders')).toPromise().then(orders => {
            this.temporaryOrders = orders;
            this.countAndUpdateTemporyOrderProductAmount();
            return this.temporaryOrders;
        });
    }

    temporarayOrderSetAmount(item, newAmount) {
        return this.http.post(api('/user/order/temporary-order-set-amount'), {
            product_id: item.product_id,
            new_amount: newAmount
        })
            .toPromise()
            .then(ret => {
                item.amount = ret.new_amount;
                this.countAndUpdateTemporyOrderProductAmount();
            });

    }
}