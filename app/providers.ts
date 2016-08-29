import {provide, Provider} from '@angular/core';
import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS , RequestOptions, XHRBackend,Http as AngularHttp}
from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';
import {Http,CustomRequestOptions} from "./services/http";
import {GoodsSearchService} from "./services/goods";
import {AccountService} from "./services/AccountService";

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
  GoodsSearchService,
  
];