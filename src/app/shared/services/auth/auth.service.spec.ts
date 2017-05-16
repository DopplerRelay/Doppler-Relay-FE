import { ReflectiveInjector } from '@angular/core';
import { Http } from '@angular/http';
import { Response, ResponseOptions, RequestOptionsArgs } from '@angular/http';
import { Logger } from "angular2-logger";
import { LocalStorageService } from "angular-2-local-storage";
import { Mock } from  "ts-mocks";
import { Observable } from "rxjs/Observable";
import { Token } from "app/shared/models/token";
import 'rxjs/add/observable/of';
import { AuthService } from "app/shared/services/auth/auth.service";

describe('AuthService', () => {
  beforeEach(() => {

    // TODO: is it really necessary to use ts-mock library? I should opt for remove it and create an anonymous object
    this.mockHttp = new Mock<Http>();
    this.mockLogger = new Mock<Logger>();
    this.mockLocalStorageService = new Mock<LocalStorageService>();

    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: Http, useValue: this.mockHttp.Object},
      {provide: Logger, useValue: this.mockLogger.Object},
      {provide: LocalStorageService, useValue: this.mockLocalStorageService.Object},
      AuthService
    ]);

    this.service = this.injector.get(AuthService);
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });
  
  it('should store access_token when successful login', () => {
    // Arrange
    this.mockHttp.setup(x => x.post)
      .is((url:string, body: any, option?: RequestOptionsArgs) => {
        var response = new Response(new ResponseOptions({ body: { access_token: "valid_access_token" }, status: 201}));
        return Observable.of(response);
      });

    let localStorageServiceSetCallsCount = 0;
    this.mockLocalStorageService.setup(x => x.set)
      .is((key: string, value: any) => {
        localStorageServiceSetCallsCount++;
      });

    // Act
    this.service.openSession("validUsername", "validPassword")

    // Assert
    .then(obj => {
      expect(localStorageServiceSetCallsCount).toBe(1);
    });
  });
});
