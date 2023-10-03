import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.backSpringUrl + '/performmma/';
const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OtherSpringService {
  userAccounts: any;

  constructor(private http: HttpClient) { }

  getUserAccounts(): Observable<any> {
    return this.http.get(AUTH_API + 'users', options);
  }

  getExistingRoles(): Observable<any> {
    return this.http.get(AUTH_API + 'roles', options);
  }
}