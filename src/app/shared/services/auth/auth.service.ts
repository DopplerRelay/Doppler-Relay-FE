import { Logger } from 'angular2-logger/core';
import { Injectable } from '@angular/core';
import { Token } from "app/shared/models/token";
import { Observable } from "rxjs/Observable";
import { ApplicationError } from "app/shared/services/infrastructure/applicationError";
import { HttpService } from "app/shared/services/infrastructure/http/http.service";
import "rxjs/add/operator/map"

@Injectable()
export class AuthService {

  constructor(private http: HttpService, private logger: Logger) { }

  openSession(username: string, password: string): Observable<void> {
    
    let credentials = {'username': username, 'password': password};

    return this.http.post('tokens', credentials)
      .map(response => {
        // TODO: use mapper to get the token
        // if (!mapper.TryToMap<Token>(response.json()))
        //   throw new ServiceError(ServiceError.INVALID_SERVER_RESPONSE)
        let token = response.json() as Token;
        if (!token || !token.accessToken)
           throw new ApplicationError(ApplicationError.INVALID_SERVER_RESPONSE)

        // TODO: we only save the access_token but we have other info in the Token JSON
        // this.localStorageService.set("accessToken", token.accessToken);
      });
  }
}


  
  
