import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "app/shared/services/auth/auth.service";
import { Token } from "app/shared/models/token"
import { ErrorHandlerService } from "app/shared/services/infrastructure/error-handler/error-handler.service";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";
import { AuthGuard } from "app/shared/services/auth/auth-guard.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  returnUrl: any;

  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private route: ActivatedRoute, private authService: AuthService, private errorHandlerService: ErrorHandlerService, private authGuard: AuthGuard, private router: Router) { }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin() {
    this.errorHandlerService.executeSafely(() => {

      if (this.loginform.valid) {
        this.authService.openSession(this.username.value, this.password.value)
        .subscribe({

          complete: () => {
            this.router.navigateByUrl(this.returnUrl);
          },

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
