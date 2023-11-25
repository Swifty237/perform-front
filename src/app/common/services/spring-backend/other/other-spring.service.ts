import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { ProfileElement } from 'src/app/common/elements-types/profile-element';

const AUTH_API = environment.backSpringUrl + '/performmma/';
const PREF_API = environment.backSpringUrl + '/profile/';

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

  postFighterProfile$(profile: ProfileElement): Observable<ProfileElement> {
    return this.http.post<ProfileElement>(PREF_API + 'newprofile/' + this.authService.userId, profile, options);
  }

  loadFighterProfile$(profileId: number): Observable<ProfileElement> {
    return this.http.get<ProfileElement>(PREF_API + "loadprofile/" + this.authService.userId + "/" + profileId, options);
  }

  loadAllFighterProfiles$(): Observable<ProfileElement[]> {
    return this.http.get<ProfileElement[]>(PREF_API + 'profiles/' + this.authService.userId, options);
  }

  deleteFighterProfile$(profileId: number): Observable<ProfileElement> {
    return this.http.delete<ProfileElement>(PREF_API + "delete/" + this.authService.userId + "/" + profileId, options);
  }
}