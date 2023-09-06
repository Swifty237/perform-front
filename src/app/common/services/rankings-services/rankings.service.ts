import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FightersAndFightsElement, FightersAndWinsElement } from '../../utils/rankings-elements';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {


  apiUrlFights = "http://localhost:8282/perform-mma/rankings/numberfights";
  apiUrlVictories = "http://localhost:8282/perform-mma/rankings/victories";

  constructor(private _http: HttpClient) { }

  public getRankingsNumberFights$(): Observable<FightersAndFightsElement[]> {
    return this._http.get<FightersAndFightsElement[]>(this.apiUrlFights);
  }

  public getRankingsVictories$(): Observable<FightersAndWinsElement[]> {
    return this._http.get<FightersAndWinsElement[]>(this.apiUrlVictories);
  }
}