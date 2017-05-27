import { NgModule } from '@angular/core';
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { LocalStorageService } from "app/shared/services/infrastructure/local-storage/local-storage.service";

@NgModule({
  imports: [
  ],
  declarations: [
    FooterComponent
    ],
  exports: [
    FooterComponent
    ],
  providers: [
    HttpProxyService,
    LocalStorageService
  ]
})
export class SharedModule { }
