import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { GraphsComponent } from './graphs/graphs.component';
import { PerformHelpComponent } from './perform-help/perform-help.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngr-home', pathMatch: 'full' },
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-configurations', component: ConfigurationsComponent },
  { path: 'ngr-rankings', component: RankingsComponent },
  { path: 'ngr-pronostics', component: PronosticsComponent },
  { path: 'ngr-graphs', component: GraphsComponent },
  { path: 'ngr-help', component: PerformHelpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
