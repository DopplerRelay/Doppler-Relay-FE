import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { AuthService } from "app/shared/services/auth/auth.service";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loginCount = 0;
  let authServiceStub = {
    openSession(username:string, password:string): Promise<void> {
      loginCount++;
      return Promise.resolve();
    }
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .overrideComponent(LoginFormComponent, {
      set: {
        providers: [
          { provide: AuthService, useValue: authServiceStub }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    loginCount = 0;
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should require username and password', () => {
    component.onLogin();
    expect(component.loginform.valid).toBeFalsy();
    expect(loginCount).toBe(0);
  });

  it('should call service with username and password', () => {
    component.loginform.controls['username'].setValue('testUserName');
    component.loginform.controls['password'].setValue('testPassword');
    component.onLogin();
    expect(component.loginform.valid).toBeTruthy();
    expect(loginCount).toBe(1);
  });
});
