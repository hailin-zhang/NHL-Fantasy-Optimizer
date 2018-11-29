import { Component } from '@angular/core';
import {YahooService} from '../../../core/services/Yahoo-API.service/yahoo-api.service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private YahooAPI: YahooService) {}

}
