import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UfcNewsService {
  // [x: string]: any;

  apiUrl = "http://localhost:8282/perform-mma/ufcnews";

  constructor(private _http: HttpClient) { }

  public getAllUfcNews$(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl);
  }
}
