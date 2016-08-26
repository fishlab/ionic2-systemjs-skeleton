import {provide, Provider} from '@angular/core';
import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Headers , Request, Response, BaseRequestOptions, RequestOptions, ConnectionBackend, RequestOptionsArgs, XHRBackend}
from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';
import {Http} from "./services/http";
import {GoodsSearchService} from "./services/goods";
import {AccountService} from "./services/AccountService";

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
    useFactory: (backend: XHRBackend, options: RequestOptions) => new Http(backend, options),
    deps: [XHRBackend, RequestOptions]
  }),
  NavController,
  AccountService,
  GoodsSearchService,
  
];