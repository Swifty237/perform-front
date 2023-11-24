import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/spring-backend/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister!: FormGroup;
  passwordConfirmError: string = "";
  usernameExistMessage = "";
  emailExistMessage = "";

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this._formBuilder.group({
      username: this._formBuilder.control("", Validators.required),
      email: this._formBuilder.control("", [Validators.required, Validators.email]),
      password: this._formBuilder.control(""),
      passwordConfirm: this._formBuilder.control("")
    })
  }

  handleRegister() {
    let email = this.formRegister.value.email
    let username = this.formRegister.value.username
    let password = this.formRegister.value.password
    let passwordConfirm = this.formRegister.value.passwordConfirm

    if (password == passwordConfirm) {

      this.passwordConfirmError = "";

      this.authService.register$(email, username, password).subscribe({
        next: data => {

          if (data["user-exist"]) {

            this.emailExistMessage = "";
            this.usernameExistMessage = data["user-exist"];

          } else if (data["email-exist"]) {

            this.usernameExistMessage = "";
            this.emailExistMessage = data["email-exist"];

          } else {

            this.usernameExistMessage = ""
            this.emailExistMessage = ""

            this.authService.loadProfile(data);
            this.router.navigateByUrl("/ngr-home");
          }
        }
      })
    } else {
      this.passwordConfirmError = "Les mots de passe sont différents"
    }
  }

  validateField(field: string) {
    const control = this.formRegister.get(field);

    if (control && control.invalid) {
      control.markAsTouched();
    }
  }
}