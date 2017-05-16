import { NgModule } from '@angular/core';
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { HttpService } from "app/shared/services/infrastructure/http/http.service";

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
    HttpService
  ]
})
export class SharedModule { }
