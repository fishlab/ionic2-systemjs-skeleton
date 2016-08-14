import { Injectable } from "@angular/core"
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Account } from './Account';

//todo refactor
@Injectable()
export class AccountService {
  constructor(private http: Http) { }
  private heroesUrl = 'http://localhost:8000/auth/sign-in';  // URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });
  signIn(name: string, password: string): any {
    console.log(arguments);
    var toLogin = { "username": name, "password": password }
    return this.http.post(this.heroesUrl, JSON.stringify(toLogin), { headers: this.headers })
      // .subscribe(
      // data => this.extractData(data),
      // error => this.handleError(error)
      // )
    // .toPromise().then(res => res.json() )
    // .then(this.extractData)
    // .catch(this.handleError);
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