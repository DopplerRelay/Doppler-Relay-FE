import { Injectable } from '@angular/core';
import { Token } from "app/shared/models/token";
import { Observable } from "rxjs/Observable";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";
import { ApiToken } from "app/shared/models/api/api-token";
import "rxjs/add/operator/map"
import { Identity } from "app/shared/models/identity";
import { ApiJwtBody } from "app/shared/models/api/api-jwt-body";

@Injectable()
export class AuthService {

  currentIdentity: Identity = null;

  constructor(private http: HttpProxyService, private localStorageService: LocalStorageService) {

    let accessToken = localStorage.getItem(LocalStorageService.ACCESS_TOKEN_KEY);

    if (accessToken != null) {
      this.CreateCurrentIdentity(accessToken);
    }
  }

  openSession(username: string, password: string): Observable<void> {
    
    let credentials = {'username': username, 'password': password};

    return this.http.post('tokens', credentials)
      .map(response => {
        try
        {
          let token = new Token(response.json() as ApiToken);

          this.localStorageService.setItem(LocalStorageService.ACCESS_TOKEN_KEY, token.accessToken);

          this.CreateCurrentIdentity(token.accessToken);
        } catch (error) {
          console.error(error);
          throw new ApplicationError(ApplicationError.PROCESSING_SERVER_RESPONSE);
        }
      });
  }

  private CreateCurrentIdentity(jwtToken: string): void {

      let tokenBody = JSON.parse(atob(jwtToken.split(".")[1])) as ApiJwtBody;
      
      this.currentIdentity = new Identity(tokenBody);
  }
}


  
  
