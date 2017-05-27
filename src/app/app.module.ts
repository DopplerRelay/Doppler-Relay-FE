import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, isDevMode } from '@angular/core';
import { environment }    from '../environments/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthModule } from "app/auth/auth.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor() { }
}
