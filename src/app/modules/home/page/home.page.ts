import {Component, OnInit} from '@angular/core';
import {YahooService} from '@services/Yahoo-API.service/yahoo-api.service.service';
import {NHLService} from '@services/NHL-API.service/nhl-api.service.service';
import {Division, League} from '@VM/standings.view-model';
import {DivisionTeamsComponent} from '@home-components/division-teams/division-teams.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    entryComponents: [DivisionTeamsComponent]
})
export class HomePage implements OnInit {

    public currentStandings: Array<League> = [];

    constructor(private YahooAPI: YahooService,
                private NHLApi: NHLService,
                private router: Router) {
    }

    public async ngOnInit(): Promise<void> {
        this.currentStandings = (await this.NHLApi.getCurrentStandings()).records;
    }

    public openDivisionsComponent(currentDivision: Division): void {
        this.router.navigate(['teams'], {queryParams: currentDivision});
    }

}
