import {Component, OnInit} from '@angular/core';
import {Division, NHLAPITeam} from '@VM/standings.view-model';
import {NHLService} from '@services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TeamPlayersComponent} from '@home-components/team-players/team-players.component';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-division-teams',
    templateUrl: './division-teams.component.html',
    styleUrls: ['./division-teams.component.scss'],
    entryComponents: [TeamPlayersComponent]
})
export class DivisionTeamsComponent implements OnInit {

    public currentDivision: Division;
    public currentTeams: NHLAPITeam[];

    constructor(private nhlAPI: NHLService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public async ngOnInit(): Promise<void> {
        this.currentDivision = await (this.route.queryParams.pipe(first()).toPromise()) as Division;
        this.currentTeams = (await this.nhlAPI.getTeams()).teams;
    }

    public openTeamsComponent(currentTeam: NHLAPITeam): void {
        this.router.navigate(['players'], {queryParams: currentTeam});
    }

}
