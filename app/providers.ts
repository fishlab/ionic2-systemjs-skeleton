import {provide, Provider} from '@angular/core';
import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS , RequestOptions, XHRBackend}
from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';
import {Http,CustomRequestOptions} from "./services/http";
import {ProductSearchService,ProductDisplayService} from "./services/product";
import {AccountService,SiginEvent} from "./services/account_";
import {OrderService} from "./services/order";
export let providers = [
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: CustomRequestOptions }),
  new Provider(Http, {
    useFactory: (backend: XHRBackend, options: RequestOptions) => new Http(backend, options),
    deps: [XHRBackend, RequestOptions]
  }),
  // new Pro
  NavController,
  AccountService,
  SiginEvent,
  ProductSearchService,
  ProductDisplayService,
  OrderService
];