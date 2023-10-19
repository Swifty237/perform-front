import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.backSpringUrl + "/auth/";

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
  userId!: number;
  accessToken: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    let params = new HttpParams().set("username", username).set("password", password);
    return this.http.post(AUTH_API + 'login', params, options);
  }

  register(email: string, username: string, password: string): Observable<any> {
    let params = new HttpParams().set("email", email).set("username", username).set("password", password);
    return this.http.post(AUTH_API + 'register', params, options);
  }


  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data["access-token"];
    let decodedJwt: any = jwtDecode(this.accessToken!);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    this.userId = decodedJwt.userId;

    window.localStorage.setItem("jwt-token", this.accessToken!);
  }


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