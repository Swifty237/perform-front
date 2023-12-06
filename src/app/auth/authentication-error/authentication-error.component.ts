import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/spring-backend/auth.service';

@Component({
  selector: 'app-authentication-error',
  templateUrl: './authentication-error.component.html',
  styleUrls: ['./authentication-error.component.scss']
})
export class AuthenticationErrorComponent {
  loginForm!: FormGroup;

  message = "";
  errorMessage = "";
  invalidUsername = "";
  invalidPassword = "";

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      username: this._formBuilder.control("", Validators.required),
      password: this._formBuilder.control("", Validators.required),

    })

    if (this.authService.accessToken == null) {
      this.errorMessage = "Vous devez être connecter pour acceder à cette page !"
    } else {
      this.errorMessage = "";
    }

  }

  validateField(field: string) {
    const control = this.getControl(field);

    if (control && control.invalid) {
      control.markAsTouched();
    }
  }

  getControl(field: string) {
    return this.loginForm.get(field);
  }

  handleLogin() {
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password

    const controlUsername = this.getControl("username");
    const controlPassword = this.getControl("password");

    if (controlUsername && controlUsername.invalid) {
      this.validateField("username");
      return
    }

    if (controlPassword && controlPassword.invalid) {
      this.validateField("password");
      return
    }


    this.authService.login$(username, password).subscribe({
      next: data => {

        this.message = "";
        this.errorMessage = "";
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/ngr-home");
      },

      error: err => {

        if (err.status == 401) {
          this.message = "Invalid username, email or password !"
        }
      }
    })


  }
}
