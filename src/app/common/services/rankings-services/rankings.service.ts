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
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RankingsService {

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