import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "app/shared/services/auth/auth.service";
import { Token } from "app/shared/models/token"

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [
    AuthService
    ]
})
export class LoginFormComponent implements OnInit {
  
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onLogin() {
    if (this.loginform.valid) {
      this.authService.openSession(this.username.value, this.password.value)
      .subscribe({
        complete: () => alert("Login successful"),
        error: error => alert(`Error attempting to login. Error code: ${error.code}`)
      });
    }
  }
}
