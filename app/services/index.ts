
import {config} from './config';

export abstract class Service {

}

export abstract class RemoteService extends Service {


    protected api(api_uri): string {
        return  config.api_base_url + api_uri;
    }
}