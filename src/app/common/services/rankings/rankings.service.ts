import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FigthersAndFightsElement } from '../../utils/rankings-elements';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {


  apiUrl = "http://localhost:8282/perform-mma/rankings/numberfights";

  constructor(private _http: HttpClient) { }

  public getRankingsNumberFights$(): Observable<FigthersAndFightsElement[]> {
    return this._http.get<FigthersAndFightsElement[]>(this.apiUrl);
  }
}