import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StitchClientFactory } from 'mongodb-stitch';

@Injectable({
  providedIn: 'root'
})
export class NHLService implements OnInit {

  private mongoDB_appID: string = 'nhl-fantasy-optimizer-jhtlz';
  private stitchClientPromise: any;
  private stitchClient: any;

  constructor(private http: HttpClient) {
    this.stitchClientPromise = StitchClientFactory.create(this.mongoDB_appID);
  }

  public async ngOnInit(): Promise<void> {
      this.stitchClient = await this.stitchClientPromise;
  }

  public toggleSavePlayer(playerName: string) {
    const savedPlayers = this.stitchClient.service('mongodb', 'mongodb-atlas').db('store').collection('players');
    const player = {
      playerName: playerName,
      playerId: 'todo',
    };
    savedPlayers.insertOne(player);
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
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/teams/' + ID + '?expand=team.roster').toPromise();
  }

  public async getTeams(): Promise<any> {
    return await this.http.get('https://statsapi.web.nhl.com/api/v1/teams').toPromise();
  }

}
