import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NHLService {

  private _savedPlayers: BehaviorSubject<Set<string>> = new BehaviorSubject(new Set<string>());

  constructor(private http: HttpClient) {
  }

  public toggleSavePlayer(playerName: string) {
    const currentlySaved = this._savedPlayers.value;
    currentlySaved.has(playerName) ? currentlySaved.delete(playerName) : currentlySaved.add(playerName);
    // communicate to MongoDB and save player
      // TODO: determine which field are required for API call for player information - i.e. name, i.d., etc.
      // if (saved to MongoDB) :
      this._savedPlayers.next(currentlySaved);
  }

  public clearSavedPlayers() {
      // communicate to MongoDB to clear saved players
      // if (saved to MongoDB):
    this._savedPlayers.next(new Set<string>());
  }

  public async getCurrentStandings(): Promise<any> {
      return await this.http.get('https://statsapi.web.nhl.com/api/v1/standings').toPromise();
  }

  // Gets schedule for current day
  public async getTodaysSchedule(): Promise<any> {
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule').toPromise();
  }

  // YYYY-MM-DD format for startDate, endDate
  public async getScheduleRange(startDate: string, endDate: string, teamID: number): Promise<any> {
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule?TeamId=' + teamID + '&startDate='
    + startDate + '&endDate=' + endDate).toPromise();
  }

  public async getNextWeekSchedule(): Promise<any> {
    const currentDate = new Date();
    const dateNextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=' + currentDate.getFullYear()
    + '-' + currentDate.getMonth() + '-' + currentDate.getDate() + '?endDate=' + dateNextWeek.getFullYear()
        + '-' + dateNextWeek.getMonth() + '-' + dateNextWeek.getDate()).toPromise();
  }

  public async getTeamRoster(ID: string): Promise<any> {
    return await this.http.get('GET https://statsapi.web.nhl.com/api/v1/teams/' + ID + '?expand=team.roster').toPromise();
  }

  public async getTeams(): Promise<any> {
    return await this.http.get(' https://statsapi.web.nhl.com/api/v1/teams').toPromise();
  }
}
