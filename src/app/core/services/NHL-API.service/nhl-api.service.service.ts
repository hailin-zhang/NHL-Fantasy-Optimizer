import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NHLService {

  constructor(private http: HttpClient) {
  }

  public async getCurrentStandings(): Promise<any> {
      return await this.http.get('https://statsapi.web.nhl.com/api/v1/standings');
  }

  // Gets schedule for current day
  public async getTodaysSchedule(): Promise<any> {
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule');
  }

  // YYYY-MM-DD format for startDate, endDate
  public async getScheduleRange(startDate: string, endDate: string, teamID: number): Promise<any> {
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule?TeamId=' + teamID + '&startDate='
    + startDate + '&endDate=' + endDate);
  }

  public async getNextWeekSchedule(): Promise<any> {
    const currentDate = new Date();
    const dateNextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=' + currentDate.getFullYear()
    + '-' + currentDate.getMonth() + '-' + currentDate.getDate() + '?endDate=' + dateNextWeek.getFullYear()
        + '-' + dateNextWeek.getMonth() + '-' + dateNextWeek.getDate());
  }

  public async getTeamRoster(ID: string): Promise<any> {
    return await this.http.get('GET https://statsapi.web.nhl.com/api/v1/teams/' + ID + '?expand=team.roster');
  }
}
