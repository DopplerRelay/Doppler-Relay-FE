import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "app/shared/services/auth/auth.service";
import { Token } from "app/shared/models/token"
import { ErrorHandlerService, HandleError } from "app/shared/services/infrastructure/error-handler/error-handler.service";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  returnUrl: any;

  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  @HandleError()
  onLogin() {
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
            ErrorHandlerService.nextError.next(applicationError);
          }
        }
      });
    }
  }
}
