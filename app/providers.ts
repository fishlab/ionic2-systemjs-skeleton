import {provide, Provider} from '@angular/core';
import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Headers, Http, Request, Response, BaseRequestOptions, RequestOptions, ConnectionBackend, RequestOptionsArgs, XHRBackend}
from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';

import {GoodsSearchService} from "./services/goods";
import {AccountService} from "./services/AccountService";

class CustomHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('request...');
    return super.request(url, options)
      .map(res => {

        console.log('request res===>', res);

        return res;
      })
      .catch(res => {
        // do something
        // Observable.throw(res);
        // return res;
        return Observable.throw(res);
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    console.log('post...');
    return super.post(url, body, options)
      .map(res => {
        var isJson = res.headers.get('Content-Type') == 'application/json';
        console.log('post res is json:', isJson);
        if (isJson) {
          var result = res.json();
          console.log('post result:', result);
          var error = result['$error_msg'];
          if (error) {
            console.error('post returns error:', error)
            throw Observable.throw(result);
          }
          return result;
        }
        return res;
      })
      .catch(res => {
        // do something
        return Observable.throw(res);
      });
  }
}

class CustomRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    // this.headers.set('Content-Type', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.withCredentials = true;
  }

}

export let providers = [
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: CustomRequestOptions }),
  new Provider(Http, {
    useFactory: (backend: XHRBackend, options: RequestOptions) => new CustomHttp(backend, options),
    deps: [XHRBackend, RequestOptions]
  }),
  NavController,
  AccountService,
  GoodsSearchService,
  
];