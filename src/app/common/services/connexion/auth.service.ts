import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:3002/auth/';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {

    let params = new HttpParams().set("username", username).set("password", password);

    return this.http.post(
      AUTH_API + 'login',
      params,
      options
    );
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data["access-token"];
    let decodedJwt: any = jwtDecode(this.accessToken!);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;

    window.localStorage.setItem("jwt-token", this.accessToken!);
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     options
  //   );
  // }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.removeItem("jwt-token");
    this.router.navigateByUrl("/ngr-login");
  }

  loadJWtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwt-token");

    if (token) {
      this.loadProfile({ "access-token": token });
      this.router.navigateByUrl("/ngr-home");
    }
  }
}