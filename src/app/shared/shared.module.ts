import { NgModule } from '@angular/core';
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from "app/shared/services/auth/auth.service";
import { ErrorHandlerService } from "app/shared/services/infrastructure/error-handler/error-handler.service";
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

@NgModule({
  imports: [
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorHandlerComponent
    ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ErrorHandlerComponent
    ],
  providers: [
    HttpProxyService,
    LocalStorageService,
    AuthService,
    ErrorHandlerService
  ]
})
export class SharedModule { }
