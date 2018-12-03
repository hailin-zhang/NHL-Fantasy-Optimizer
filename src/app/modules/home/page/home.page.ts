import { Component } from '@angular/core';
import {YahooService} from '../../../core/services/Yahoo-API.service/yahoo-api.service.service';
import {NHLService} from '../../../core/services/NHL-API.service/nhl-api.service.service';
import {Standings} from '../../../shared/view-models/standings.view-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pacificStandings: Array<Standings>

  constructor(private YahooAPI: YahooService,
              private NHLApi: NHLService) {}

}
