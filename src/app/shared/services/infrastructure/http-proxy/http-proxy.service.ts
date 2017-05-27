import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, RequestOptionsArgs, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ApplicationError } from "app/shared/services/infrastructure/applicationError";
import { environment } from "environments/environment";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";
import { ApiError } from "app/shared/models/api/api-error";
import "rxjs/add/operator/catch"

@Injectable()
export class HttpProxyService extends Http {  
  private apiProxyUrl = environment.dopplerRelayApi.baseUrl;
  private authorizationHeader = '';

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, localStorageService : LocalStorageService) {
    super(backend, defaultOptions);
    this.subscribeToToken(localStorageService);
  }

  request(request: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.configureRequest(request, options);
    return this.interceptResponse(request, options);
  }

  private subscribeToToken(localStorageService : LocalStorageService) {
    let token = localStorageService.getItem(LocalStorageService.ACCESS_TOKEN_KEY);

    if (token && token != '') {
        this.authorizationHeader = `Token ${token}`;
    }

    localStorageService.newSetItem.subscribe(item => {
      if (item.key === LocalStorageService.ACCESS_TOKEN_KEY) {
        this.authorizationHeader = `Token ${item.value}`;
      }
    });

    localStorageService.removedItem.subscribe(key => {
      if (key === LocalStorageService.ACCESS_TOKEN_KEY) {
        this.authorizationHeader = '';
      }
    });
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
    
    if (this.authorizationHeader != '' && !headers.has('Authorization')) {
      headers.set('Authorization', this.authorizationHeader);
    }
  }

  private onCatch() {
    return (res: Response) => {
      let apiError = res.json() as ApiError;
      
      switch(`${apiError.status}.${apiError.errorCode}`)
      {
        case '400.1': throw new ApplicationError(ApplicationError.VALIDATION_ERROR);
        case '400.2': throw new ApplicationError(ApplicationError.INVALID_INTERVAL_DATE);
        case '400.3': throw new ApplicationError(ApplicationError.USER_REGISTRATION_ERROR);
        case '400.4': throw new ApplicationError(ApplicationError.DEFAULT_DOMAIN_SHOULD_BE_ACTIVE);
        case '401.0': throw new ApplicationError(ApplicationError.UNAUTHORIZED);
        case '401.1': throw new ApplicationError(ApplicationError.INVALID_TOKEN);
        case '401.2': throw new ApplicationError(ApplicationError.AUTHENTICATION_ERROR);
        case '401.3': throw new ApplicationError(ApplicationError.INVALID_TOKEN_EXPIRED);
        case '403.0': throw new ApplicationError(ApplicationError.FORBIDDEN_NO_ENOUGH_PRIVILEGES);
        case '403.1': throw new ApplicationError(ApplicationError.FORBIDDEN_WRONG_ACCOUNT);
        case '403.2': throw new ApplicationError(ApplicationError.FORBIDDEN_PENDING_ACTIVATION);
        case '403.3': throw new ApplicationError(ApplicationError.FORBIDDEN_PENDING_ACTIVATION_REQUIRED);
        case '403.4': throw new ApplicationError(ApplicationError.FORBIDDEN_UNEXPECTED_TOKEN_FORMAT);
        case '403.5': throw new ApplicationError(ApplicationError.FORBIDDEN_TEMPORAL_TOKEN);
        case '403.6': throw new ApplicationError(ApplicationError.FORBIDDEN_TEMPORAL_TOKEN_REQUIRED);
        case '403.7': throw new ApplicationError(ApplicationError.FORBIDDEN_INTERNAL_ADMIN_TOKEN_REQUIRED);
        case '404.0': throw new ApplicationError(ApplicationError.ROUTE_NOT_FOUND);
        case '404.1': throw new ApplicationError(ApplicationError.ENTITY_NOT_FOUND);
        case '500.0': throw new ApplicationError(ApplicationError.UNEXPECTED_ERROR);
        case '501.0': throw new ApplicationError(ApplicationError.NOT_IMPLEMENTED);
      }

      // Review other status codes and improve the error handling based on the API documentation.
      throw new ApplicationError(ApplicationError.UNEXPECTED_ERROR);
    };
  }
}