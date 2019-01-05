import {Component, Input, OnInit} from '@angular/core';
import {Division} from '../../../../shared/view-models/standings.view-model';

@Component({
  selector: 'app-division-teams',
  templateUrl: './division-teams.component.html',
  styleUrls: ['./division-teams.component.scss']
})
export class DivisionTeamsComponent implements OnInit {

    @Input() currentDivision: Division;

  constructor() { }

  ngOnInit() {
  }

}
