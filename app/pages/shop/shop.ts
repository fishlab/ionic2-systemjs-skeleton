import {config} from "../../services/config";

export class ShopPage{

    getShpoLogoUrl(shop:any){
        return config.image_server +'/' + shop.logo;
    }

    getProductImageUrl(product){
        if (product.images && product.images.length){
            return config.image_server + '/' + product.images[0];
        }
    }
}