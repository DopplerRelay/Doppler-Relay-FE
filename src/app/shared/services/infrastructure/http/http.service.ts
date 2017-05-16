import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, RequestOptionsArgs, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ApplicationError } from "app/shared/services/infrastructure/applicationError";
import { environment } from "environments/environment";
import "rxjs/add/operator/catch"

@Injectable()
export class HttpService extends Http {  
  private apiProxyUrl = environment.dopplerRelayApi.baseUrl;
  private authorizationHeader = '';

  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
    // TODO: subscribe to localstorage as observable and set the authorization header
  }

  request(request: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.configureRequest(request, options);
    return this.interceptResponse(request, options);
  }

  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    if (typeof request === 'string') {
      request = `${this.apiProxyUrl}/${request}`;
      this.setHeaders(options);
    } else {
      request.url = `${this.apiProxyUrl}/${request.url}`;
      this.setHeaders(request);
    }
  }

  private interceptResponse(request: string | Request, options: RequestOptionsArgs) : Observable<Response> {
    return super
      .request(request, options)
      .catch(this.onCatch());
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const headers = objectToSetHeadersTo.headers;
    headers.set('Content-Type', 'application/json');
    
    if (this.authorizationHeader != '') {
      headers.set('Authorization', this.authorizationHeader);
    }
  }

  private onCatch() {
    return (res: Response) => {
      if (res.status === 401) {
        throw new ApplicationError(ApplicationError.UNAUTHORIZED)
      }
      // Review other status codes and improve the error handling based on the API documentation.
      throw new ApplicationError(ApplicationError.UNEXPECTED);
    };
  }
}