import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FightersAndFightsElement,
  FightersAndWinsElement,
  FightersAndKoWinsElement,
  FightersAndIpsgElement,
  FightersAndTkdownRElement,
  FightersAndTkdownDElement,
  FightersAndTkdownsElement,
  FightersAndStrkRatioElement,
  FightersAndStrikesElement,
  FightersAndSubWinsElement
} from '../../utils/rankings-elements';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  apiUrlFights = "http://localhost:8282/performmma/rankings/numberfights";
  apiUrlWins = "http://localhost:8282/performmma/rankings/wins";
  apiUrlKoWins = "http://localhost:8282/performmma/rankings/kowins";
  apiUrlSubmissionsWins = "http://localhost:8282/performmma/rankings/submissionwins";
  apiUrlStrikes = "http://localhost:8282/performmma/rankings/strikes";
  apiUrlStrikesRatio = "http://localhost:8282/performmma/rankings/strikesratio";
  apiUrlTakedowns = "http://localhost:8282/performmma/rankings/takedowns";
  apiUrlTakedownDefense = "http://localhost:8282/performmma/rankings/takedowndefense";
  apiUrlTakedownRatio = "http://localhost:8282/performmma/rankings/takedownsratio";
  apiUrlIpsg = "http://localhost:8282/performmma/rankings/ipsg";

  constructor(private _http: HttpClient) { }

  public getRankingsNumberFights$(): Observable<FightersAndFightsElement[]> {
    return this._http.get<FightersAndFightsElement[]>(this.apiUrlFights);
  }

  public getRankingsWins$(): Observable<FightersAndWinsElement[]> {
    return this._http.get<FightersAndWinsElement[]>(this.apiUrlWins);
  }

  public getRankingsKoWins$(): Observable<FightersAndKoWinsElement[]> {
    return this._http.get<FightersAndKoWinsElement[]>(this.apiUrlKoWins);
  }

  public getRankingsSubmissionsWins$(): Observable<FightersAndSubWinsElement[]> {
    return this._http.get<FightersAndSubWinsElement[]>(this.apiUrlSubmissionsWins);
  }

  public getRankingStrikes$(): Observable<FightersAndStrikesElement[]> {
    return this._http.get<FightersAndStrikesElement[]>(this.apiUrlStrikes);
  }

  public getRankingsStrikingRatio$(): Observable<FightersAndStrkRatioElement[]> {
    return this._http.get<FightersAndStrkRatioElement[]>(this.apiUrlStrikesRatio);
  }

  public getRankingsTakedowns$(): Observable<FightersAndTkdownsElement[]> {
    return this._http.get<FightersAndTkdownsElement[]>(this.apiUrlTakedowns);
  }

  public getRankingTakedownDefense$(): Observable<FightersAndTkdownDElement[]> {
    return this._http.get<FightersAndTkdownDElement[]>(this.apiUrlTakedownDefense);
  }

  public getRankingTakedownRatio$(): Observable<FightersAndTkdownRElement[]> {
    return this._http.get<FightersAndTkdownRElement[]>(this.apiUrlTakedownRatio);
  }

  public getRankingsIspg$(): Observable<FightersAndIpsgElement[]> {
    return this._http.get<FightersAndIpsgElement[]>(this.apiUrlIpsg);
  }
}