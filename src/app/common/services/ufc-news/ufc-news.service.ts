import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})

export class UfcNewsService {

  apiUrl = environment.apiUrl;

  apiUrlNews = this.apiUrl + "/performmma/ufcnews";

  constructor(private _http: HttpClient) { }

  public getAllUfcNews$(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrlNews);
  }
}
