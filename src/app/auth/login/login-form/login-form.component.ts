import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "app/shared/services/auth/auth.service";
import { Token } from "app/shared/models/token"
import { ErrorHandlerService } from "app/shared/services/infrastructure/error-handler/error-handler.service";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onLogin() {
    this.errorHandlerService.executeSafely(() => {

      if (this.loginform.valid) {
        this.authService.openSession(this.username.value, this.password.value)
        .subscribe({

          complete: () => alert("Login successful"),

          error: applicationError => {

            if (applicationError.code == ApplicationError.AUTHENTICATION_ERROR) {
              alert("invalid credentials");
            } else {
              this.errorHandlerService.nextError.next(applicationError);
            }
          }
        });
      }
    });
  }
}
