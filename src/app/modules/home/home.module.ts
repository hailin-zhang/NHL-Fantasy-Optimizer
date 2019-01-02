import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './page/home.page';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {DivisionTeamsComponent} from './components/division-teams/division-teams.component';

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
    declarations: [HomePage, DivisionTeamsComponent]
})
export class HomePageModule {
}
