import {Component, OnInit} from '@angular/core';
import {NHLAPITeam, Player} from '@VM/standings.view-model';
import {NHLService} from '@services/NHL-API.service/nhl-api.service.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-team-players.component',
    templateUrl: './team-players.component.html',
    styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit {

    public currentTeam: NHLAPITeam;
    public currentRoster: Player[];

    constructor(public nhlAPI: NHLService,
                private route: ActivatedRoute) {
    }

    public async ngOnInit(): Promise<void> {
        this.currentTeam = await (this.route.queryParams.pipe(first()).toPromise()) as NHLAPITeam;
        // TODO: consider typing this
        this.currentRoster = (await this.nhlAPI.getTeamRoster(this.currentTeam.id.toString())).teams[0].roster.roster;
    }

    public savePlayer(player: Player): void {
        // call NHLAPIService, save to MongoDB
    }

    public async refreshDatabase(): Promise<void> {
        // refresh from service
    }
}
