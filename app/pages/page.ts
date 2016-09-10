import {config} from "../services/config";

export class Page {

    private withWidthAndHeight(w, h) {
        var suffix = '?';
        var arr = [];
        if (w) {
            arr.push('w=' + w)
        }
        if (h) {
            arr.push('h=' + h);
        }
        return '?' + arr.join('&');
    }

    getShpoLogoUrl(shop: any, w = null, h = w) {
        return config.image_server + '/' + shop.logo + this.withWidthAndHeight(w, h);
    }

    getProductImageUrl(product, w = null, h = w) {
        var url = null;
        if (product.images && product.images.length) {
            url = config.image_server + '/' + product.images[0] + this.withWidthAndHeight(w, h);
        }
        return url;
    }
}