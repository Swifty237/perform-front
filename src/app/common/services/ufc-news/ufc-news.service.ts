import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment"
import { UfcNewsElement } from '../../utils/ufc-news-elements';

@Injectable({
  providedIn: 'root'
})

export class UfcNewsService {

  apiUrl = environment.backNodeUrl;

  apiUrlNews = this.apiUrl + "/performmma/ufcnews";

  constructor(private _http: HttpClient) { }

  public getAllUfcNews$(): Observable<UfcNewsElement[]> {
    return this._http.get<UfcNewsElement[]>(this.apiUrlNews);
  }
}
