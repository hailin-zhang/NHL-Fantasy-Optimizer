import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Division, NHLAPITeam, StandingsTeam} from '../../../../shared/view-models/standings.view-model';
import {NHLService} from '../../../../core/services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-division-teams',
  templateUrl: './division-teams.component.html',
  styleUrls: ['./division-teams.component.scss']
})
export class DivisionTeamsComponent implements OnInit, OnDestroy {

  public currentDivision: Division;
  public currentTeams: NHLAPITeam[];
  private subscriptions: Subscription[] = [];

  constructor(private nhlAPI: NHLService,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
      this.subscriptions.push(this.route.queryParams.subscribe(params => {
          this.currentDivision = params['currentDivision'];
          console.log(this.currentDivision);
      }));
      this.nhlAPI.getTeams().then((teams: any) => {
        this.currentTeams = teams.teams;
        console.log(this.currentTeams);
      });
  }

  public ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => {
          subscription.unsubscribe();
      });
  }

}
