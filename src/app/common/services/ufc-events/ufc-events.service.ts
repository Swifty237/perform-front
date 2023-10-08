import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UfcEventsElement } from '../../utils/ufc-events-elements';

@Injectable({
  providedIn: 'root'
})

export class UfcEventsService {

  apiUrl = environment.backNodeUrl;

  apiUrlEvents = this.apiUrl + "/performmma/ufcevents";

  constructor(private _http: HttpClient) { }

  public getAllUfcEvents$(): Observable<UfcEventsElement[]> {
    return this._http.get<UfcEventsElement[]>(this.apiUrlEvents);
  }

}
