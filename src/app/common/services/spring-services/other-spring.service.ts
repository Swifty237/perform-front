import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { PreferenceElement } from '../../utils/preference-elements';

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

  getUserAccounts(): Observable<any> {
    return this.http.get(AUTH_API + 'users', options);
  }

  getExistingRoles(): Observable<any> {
    return this.http.get(AUTH_API + 'roles', options);
  }

  postPreference(preference: PreferenceElement): Observable<PreferenceElement> {
    return this.http.post<PreferenceElement>(PREF_API + 'newpreference/' + this.authService.userId, preference, options);
  }

  // updatePreference(toModifyPreferenceId: number, modifiedPreference: PreferenceElement): Observable<PreferenceElement> {
  //   return this.http.post<PreferenceElement>(PREF_API + 'update/' + this.authService.userId + "/" + toModifyPreferenceId, modifiedPreference, options);
  // }

  loadUserPreference(preferenceId: number): Observable<PreferenceElement> {
    return this.http.get<PreferenceElement>(PREF_API + "userpreference/" + this.authService.userId + "/" + preferenceId, options);
  }

  loadAllUserPreferences(): Observable<PreferenceElement[]> {
    return this.http.get<PreferenceElement[]>(PREF_API + 'preferences/' + this.authService.userId, options);
  }

  deletePreference(preferenceId: number): Observable<PreferenceElement> {
    return this.http.delete<PreferenceElement>(PREF_API + "delete/" + this.authService.userId + "/" + preferenceId, options);
  }
}