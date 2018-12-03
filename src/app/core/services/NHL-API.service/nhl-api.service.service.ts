import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NHLService {

  constructor(private http: HttpClient) {
  }

  public getCurrentStandings(): Promise<Object> {
      return this.http.get('https://statsapi.web.nhl.com/api/v1/standings').toPromise();
  }
}
