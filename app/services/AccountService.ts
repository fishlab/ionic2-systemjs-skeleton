import { Injectable } from "@angular/core"
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { Account } from './Account';
import {RemoteService} from "./index";

//todo refactor
@Injectable()
export class AccountService extends RemoteService{
  constructor(private http: Http) { 
    super();
  }
  private apiUrl = '/auth/sign-in';  // URL to web API

  signIn(name: string, password: string): Promise<any> {
    var toLogin = { "name": name, "password": password };
    return this.http
      .post( this.api(this.apiUrl), toLogin )
      // .catch(err=>{
      //   // Promise.reject(err);
      //   console.log(err);
        
      //   return err;
      // })
      .toPromise()
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}