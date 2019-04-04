import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StitchClientFactory} from 'mongodb-stitch';
import {Observable, ReplaySubject} from 'rxjs';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export interface DatabasePlayer {
  name: string;
  id: string;
}
export class NHLService implements OnInit {

  private mongoDB_appID: string = 'nhl-fantasy-optimizer';
  private stitchClientPromise: any;
  private stitchClient: any;
  private _savedPlayers: ReplaySubject<Map<string, DatabasePlayer>> = new ReplaySubject(1);

  constructor(private http: HttpClient) {
    this.stitchClientPromise = StitchClientFactory.create(this.mongoDB_appID);
  }

  public async ngOnInit(): Promise<void> {
      this.stitchClient = await this.stitchClientPromise;
  }

  public get savedPlayers(): Observable<Map<string, DatabasePlayer>> {
    return this._savedPlayers;
  }

  public refreshPlayers() {
    const savedPlayers = this.stitchClient.service('mongodb', 'mongodb-atlas').db('store').collection('players');
    this._savedPlayers.next(savedPlayers); // replace with mongodb saved players list
      // TODO: add, remove extra
  }

  public async toggleSavePlayer(playerName: string, playerID: string): Promise<void> {
    const currentlySavedPlayers = await this._savedPlayers.pipe(first()).toPromise();
    if (!currentlySavedPlayers.has(playerName)) {
        const savedPlayers = this.stitchClient.service('mongodb', 'mongodb-atlas').db('store').collection('players');
        const player = {
            playerName: playerName,
            playerId: playerID,
        };
        savedPlayers.insertOne(player);
    } else {
      // remove from database
    }
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
