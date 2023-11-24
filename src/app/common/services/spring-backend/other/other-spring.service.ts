import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { ProfileElement } from 'src/app/common/elements-types/profile-element';

const AUTH_API = environment.backSpringUrl + '/performmma/';
const PREF_API = environment.backSpringUrl + '/preference/';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OtherSpringService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserAccounts$(): Observable<any> {
    return this.http.get(AUTH_API + 'users', options);
  }

  getExistingRoles$(): Observable<any> {
    return this.http.get(AUTH_API + 'roles', options);
  }

  postFighterProfile$(preference: ProfileElement): Observable<ProfileElement> {
    return this.http.post<ProfileElement>(PREF_API + 'newpreference/' + this.authService.userId, preference, options);
  }

  // updatePreference(toModifyPreferenceId: number, modifiedPreference: PreferenceElement): Observable<PreferenceElement> {
  //   return this.http.post<PreferenceElement>(PREF_API + 'update/' + this.authService.userId + "/" + toModifyPreferenceId, modifiedPreference, options);
  // }

  loadFighterProfile$(preferenceId: number): Observable<ProfileElement> {
    return this.http.get<ProfileElement>(PREF_API + "userpreference/" + this.authService.userId + "/" + preferenceId, options);
  }

  loadAllFighterProfiles$(): Observable<ProfileElement[]> {
    return this.http.get<ProfileElement[]>(PREF_API + 'preferences/' + this.authService.userId, options);
  }

  deleteFighterProfile$(preferenceId: number): Observable<ProfileElement> {
    return this.http.delete<ProfileElement>(PREF_API + "delete/" + this.authService.userId + "/" + preferenceId, options);
  }
}