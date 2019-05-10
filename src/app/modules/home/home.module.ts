import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './page/home.page';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {DivisionTeamsComponent} from '@home-components/division-teams/division-teams.component';
import {TeamPlayersComponent} from '@home-components/team-players/team-players.component';

// TODO - separate modules
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [
        HomePage,
        DivisionTeamsComponent,
        TeamPlayersComponent
    ],
})
export class HomePageModule {
}
