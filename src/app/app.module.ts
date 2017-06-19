import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, isDevMode } from '@angular/core';
import { environment }    from '../environments/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthModule } from "app/auth/auth.module";
import { SharedModule } from "app/shared/shared.module";
import { ReportsModule } from "app/reports/reports.module";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/services/auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ReportsModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor() { }
}
