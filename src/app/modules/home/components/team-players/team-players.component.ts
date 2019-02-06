import {Component, OnDestroy, OnInit} from '@angular/core';
import {NHLAPITeam} from '../../../../shared/view-models/standings.view-model';
import {Subscription} from 'rxjs';
import {NHLService} from '../../../../core/services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-team-players.component',
    templateUrl: './team-players.component.html',
    styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[] = [];
    public currentTeam: NHLAPITeam;

    constructor(private nhlAPI: NHLService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.subscriptions.push(this.route.queryParams.subscribe((currentTeam: NHLAPITeam) => {
            this.currentTeam = currentTeam;
        }));
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

}
