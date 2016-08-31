import { Injectable } from "@angular/core";
import { Http } from './http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {RemoteService} from "./index";

export interface Account {
    name: string;
    mobile: string;
}

//todo refactor
@Injectable()
export class AccountService extends RemoteService {
    constructor(private http: Http) {
        super();
    }
    private apiUrl = '/auth/sign-in';  // URL to web API
    private user;

    signIn(name: string, password: string): Promise<any> {
        var toLogin = { "name": name, "password": password };
        return this.http
            .post(this.api(this.apiUrl), toLogin)
            // .catch(err=>{
            //   // Promise.reject(err);
            //   console.log(err);

            //   return err;
            // })
            .toPromise()
            .then(user => {
                this.user = user;
                return user;
            })
    }

    getStatus() {
        return this.http.get(this.api('/auth/status')).toPromise().then(ret => {
            this.user = ret;
            return this.user;
        });
    }

    

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    authenticated() {
        return this.user;
    }
}