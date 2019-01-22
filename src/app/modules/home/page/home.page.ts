import {Component} from '@angular/core';
import {YahooService} from '../../../core/services/Yahoo-API.service/yahoo-api.service.service';
import {NHLService} from '../../../core/services/NHL-API.service/nhl-api.service.service';
import {Division, League} from '../../../shared/view-models/standings.view-model';
import {DivisionTeamsComponent} from '../components/division-teams/division-teams.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    entryComponents: [DivisionTeamsComponent]
})
export class HomePage {

    public currentStandings: Array<League> = [];

    constructor(private YahooAPI: YahooService,
                private NHLApi: NHLService,
                private router: Router) {
        this.NHLApi.getCurrentStandings().then((standings: any) => {
            this.currentStandings = standings.records;
        });
    }

    public openDivisionsComponent(currentDivision: Division): void {
        this.router.navigate(['teams'], {queryParams: currentDivision});
    }

}
