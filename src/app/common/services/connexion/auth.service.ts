import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

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
  accessToken!: string;

  constructor(private http: HttpClient) { }

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
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      options
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, options);
  }
}