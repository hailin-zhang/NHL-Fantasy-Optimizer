import {Component, OnDestroy, OnInit} from '@angular/core';
import {Division, NHLAPITeam} from '@VM/standings.view-model';
import {NHLService} from '@services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {TeamPlayersComponent} from '@home-components/team-players/team-players.component';

@Component({
    selector: 'app-division-teams',
    templateUrl: './division-teams.component.html',
    styleUrls: ['./division-teams.component.scss'],
    entryComponents: [TeamPlayersComponent]
})
export class DivisionTeamsComponent implements OnInit, OnDestroy {

    public currentDivision: Division;
    public currentTeams: NHLAPITeam[];
    private subscriptions: Subscription[] = [];

    constructor(private nhlAPI: NHLService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.subscriptions.push(this.route.queryParams.subscribe((currentDivision: Division) => {
            this.currentDivision = currentDivision;
        }));
        this.nhlAPI.getTeams().then((teams: any) => {
            this.currentTeams = teams.teams;
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

    public openTeamsComponent(currentTeam: NHLAPITeam): void {
        this.router.navigate(['players'], {queryParams: currentTeam});
    }

}
