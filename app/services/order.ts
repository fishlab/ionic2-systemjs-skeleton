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
    private findTemporaryOrderItemByProductId(product_id) {
        var ret = null;
        for (let order of this.temporaryOrders) {
            for (let item of order.items) {
                if (item.product_id == product_id) {
                    ret = item;
                    break;
                }
            }
        }
        return ret;

    }

    temporaryOrderAdd(product) {
        return this.http.post(api('/user/order/temporary-order-add'), {
            product_id: product.id,
        })
            .toPromise()
            .then(ret => {
                var amount = ret.new_amount;
                var item = this.findTemporaryOrderItemByProductId(product.id);
                if (item) {
                    item.amount = amount;
                    this.countAndUpdateTemporyOrderProductAmount();

                }
            })
    }
}