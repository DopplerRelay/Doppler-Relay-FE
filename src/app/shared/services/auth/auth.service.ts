import { Injectable } from '@angular/core';
import { Token } from "app/shared/models/token";
import { Observable } from "rxjs/Observable";
import { ApplicationError } from "app/shared/services/infrastructure/applicationError";
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";
import { ApiToken } from "app/shared/models/api/api-token";
import "rxjs/add/operator/map"

@Injectable()
export class AuthService {

  constructor(private http: HttpProxyService, private localStorageService: LocalStorageService) { }

  openSession(username: string, password: string): Observable<void> {
    
    let credentials = {'username': username, 'password': password};

    return this.http.post('tokens', credentials)
      .map(response => {
        try
        {
          let token = new Token(response.json() as ApiToken);

          this.localStorageService.setItem(LocalStorageService.ACCESS_TOKEN_KEY, token.accessToken);
        }
        catch (error) {
          console.error(error);
          throw new ApplicationError(ApplicationError.PROCESSING_SERVER_RESPONSE);
        }
      });
  }
}


  
  
