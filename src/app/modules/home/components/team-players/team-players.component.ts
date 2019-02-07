import {Component, OnDestroy, OnInit} from '@angular/core';
import {NHLAPITeam} from '../../../../shared/view-models/standings.view-model';
import {Subscription} from 'rxjs';
import {NHLService} from '../../../../core/services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-team-players.component',
    templateUrl: './team-players.component.html',
    styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[] = [];
    public currentTeam: NHLAPITeam;
    public currentRoster;

    constructor(private nhlAPI: NHLService,
                private route: ActivatedRoute) {
    }

    public async ngOnInit(): Promise<void> {
        this.subscriptions.push(this.route.queryParams.subscribe((currentTeam: NHLAPITeam) => {
            this.currentTeam = currentTeam;
        }));
        // bad practice but I've literally spent 90% of my time making types for everything lmao fml
        const currentRoster = (await this.nhlAPI.getTeamRoster(this.currentTeam.franchiseId.toString()))[0].roster;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

}
