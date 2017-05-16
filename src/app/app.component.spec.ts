import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { Mock } from "ts-mocks/lib";
import { AuthService } from "app/shared/services/auth/auth.service";
import { LoginComponent } from "app/auth/components/login/login.component";
import { LoginHeaderComponent } from "app/auth/components/login/login-header/login-header.component";
import { LoginFormComponent } from "app/auth/components/login/login-form/login-form.component";

describe('AppComponent', () => {
  
  let authService = new Mock<AuthService>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        FooterComponent,
        LoginHeaderComponent,
        LoginFormComponent
      ],
      providers: [
        { provide: AuthService, value: authService }
      ]
    }).compileComponents();
  }));


  // TODO: make this test work.
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
 
});
