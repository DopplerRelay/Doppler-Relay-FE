import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Logger } from 'angular2-logger/core';
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
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor(private logger: Logger) {
    if (isDevMode()) {
      console.info('To see debug logs enter: \'logger.level = logger.Level.DEBUG;\' in your browser console');
    }
    this.logger.level = environment.logger.level;
  }
}
