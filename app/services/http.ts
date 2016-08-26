import {Headers, Http as AngularHttp, Request, Response,
  BaseRequestOptions, RequestOptions, ConnectionBackend, RequestOptionsArgs}
from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
export
  class Http extends AngularHttp {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  handleJsonResponse(res): Response | any {
    var isJson = res.headers.get('Content-Type') == 'application/json';
    if (isJson) {
      var result = res.json();
      console.log('response result:', result);
      // global error handle
      var error = result['$error_msg'];
      if (error) {
        console.error('post returns error:', error)
        throw Observable.throw(result);
      }
      return result;
    }
    return res;
  }

  handlerError(res) {
    return Observable.throw(res);
  }

  post(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response | any> {
    return super.post(url, body, options)
      .map(this.handleJsonResponse)
      .catch(this.handlerError);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response | any> {
    return super.get(url, options)
      .map(this.handleJsonResponse)
      .catch(this.handlerError);
  }

}