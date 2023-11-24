import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/spring-backend/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm!: FormGroup;

  message = "";
  errorMessage = "";

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
    const control = this.loginForm.get(field);

    if (control && control.invalid) {
      control.markAsTouched();
    }
  }

  handleLogin() {
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password

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
