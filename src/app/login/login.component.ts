import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/spring-services/auth.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  message = "";
  errorMessage = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    })

    if (this.authService.accessToken == null) {
      this.errorMessage = "Vous devez être connecter pour acceder à cette page !"
    } else {
      this.errorMessage = "";
    }

    // console.log(this.errorMessage);

  }

  handleLogin() {
    let username = this.formLogin.value.username
    let password = this.formLogin.value.password

    this.authService.login(username, password).subscribe({
      next: data => {

        this.message = "";
        this.errorMessage = "";
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/ngr-home");
      },

      error: err => {

        if (err.status == 401) {
          this.message = "Invalid username or password !"
        }
      }
    })
  }
}