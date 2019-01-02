import {Component} from '@angular/core';
import {YahooService} from '../../../core/services/Yahoo-API.service/yahoo-api.service.service';
import {NHLService} from '../../../core/services/NHL-API.service/nhl-api.service.service';
import {Division, League, Standings} from '../../../shared/view-models/standings.view-model';
import {ModalController} from '@ionic/angular';
import {DivisionTeamsComponent} from '../components/division-teams/division-teams.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    entryComponents: [DivisionTeamsComponent]
})
export class HomePage {

    public currentStandings: Array<Standings> = [];
    public nextWeekSchedule: Array<any> = [];

    constructor(private YahooAPI: YahooService,
                private NHLApi: NHLService,
                private modalController: ModalController) {
        this.NHLApi.getCurrentStandings().then(standings => {
            this.currentStandings = standings.records;
            console.log(this.currentStandings);
        });
    }

    public openDivisionsModal(league: League) {
        this.modalController.create({component: DivisionTeamsComponent});
    }
}
