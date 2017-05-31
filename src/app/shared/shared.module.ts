import { NgModule } from '@angular/core';
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
    ],
  exports: [
    FooterComponent,
    HeaderComponent
    ],
  providers: [
    HttpProxyService,
    LocalStorageService
  ]
})
export class SharedModule { }
