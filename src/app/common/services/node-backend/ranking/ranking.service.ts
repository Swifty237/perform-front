import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FightersAndFightsElement,
  FightersAndLevelElement,
  FightersAndKoWinsElement,
  FightersAndStrikesElement,
  FightersAndStrkRatioElement,
  FightersAndSubWinsElement,
  FightersAndTkdownDElement,
  FightersAndTkdownRElement,
  FightersAndTkdownsElement,
  FightersAndWinsElement
} from 'src/app/common/elements-types/ranking-element';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  apiUrl = environment.backNodeUrl;

  apiUrlFights = this.apiUrl + "/performmma/rankings/numberfights";
  apiUrlWins = this.apiUrl + "/performmma/rankings/wins";
  apiUrlKoWins = this.apiUrl + "/performmma/rankings/kowins";
  apiUrlSubmissionsWins = this.apiUrl + "/performmma/rankings/submissionwins";
  apiUrlStrikes = this.apiUrl + "/performmma/rankings/strikes";
  apiUrlStrikesRatio = this.apiUrl + "/performmma/rankings/strikesratio";
  apiUrlTakedowns = this.apiUrl + "/performmma/rankings/takedowns";
  apiUrlTakedownDefense = this.apiUrl + "/performmma/rankings/takedowndefense";
  apiUrlTakedownRatio = this.apiUrl + "/performmma/rankings/takedownsratio";
  apiUrlIpsg = this.apiUrl + "/performmma/rankings/ipsg";

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

  public getRankingsTakedownDefense$(): Observable<FightersAndTkdownDElement[]> {
    return this._http.get<FightersAndTkdownDElement[]>(this.apiUrlTakedownDefense);
  }

  public getRankingTakedownRatio$(): Observable<FightersAndTkdownRElement[]> {
    return this._http.get<FightersAndTkdownRElement[]>(this.apiUrlTakedownRatio);
  }

  public getRankingsLevel$(): Observable<FightersAndLevelElement[]> {
    return this._http.get<FightersAndLevelElement[]>(this.apiUrlIpsg);
  }
}
