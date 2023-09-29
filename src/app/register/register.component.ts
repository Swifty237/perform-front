import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/connexion/auth.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;
  confirmPasswordError: string = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      email: this.formBuilder.control(""),
      username: this.formBuilder.control(""),
      password: this.formBuilder.control(""),
      confirmPassword: this.formBuilder.control("")
    })
  }

  handleRegister() {
    let email = this.formRegister.value.email
    let username = this.formRegister.value.username
    let password = this.formRegister.value.password
    let confirmPassword = this.formRegister.value.confirmPassword

    if (password == confirmPassword) {

      this.confirmPasswordError = "";

      this.authService.register(email, username, password).subscribe({
        next: data => {
          console.log(data);

          this.authService.loadProfile(data);
          this.router.navigateByUrl("/ngr-home");
        },

        error: err => {
          console.log(err);
        }
      })
    } else {
      this.confirmPasswordError = "Les mots de passe sont différents"
    }

  }
}