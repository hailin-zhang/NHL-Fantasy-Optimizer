import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DivisionTeamsComponent} from './modules/home/components/division-teams/division-teams.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './modules/home/home.module#HomePageModule'},
    {path: 'teams', component: DivisionTeamsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
