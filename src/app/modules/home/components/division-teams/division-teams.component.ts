import {Component, Input, OnInit} from '@angular/core';
import {Division, Team} from '../../../../shared/view-models/standings.view-model';
import {NHLService} from '../../../../core/services/NHL-API.service/nhl-api.service.service';

@Component({
  selector: 'app-division-teams',
  templateUrl: './division-teams.component.html',
  styleUrls: ['./division-teams.component.scss']
})
export class DivisionTeamsComponent implements OnInit {

  @Input() public currentDivision: Division;
  public teams: Team[];

  constructor(private nhlAPI: NHLService) {
  }

  public ngOnInit(): void {
      this.nhlAPI.getTeams().then((teams: Team[]) =>
      {
        this.teams = teams;
        console.log(this.teams);
      });
  }

}
