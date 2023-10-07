import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { PerformHelpComponent } from './perform-help/perform-help.component';
import { RankingsComponent } from './rankings/rankings.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { authenticationGuard } from './common/guards/authentication.guard';
import { PreferencesComponent } from './preferences/preferences.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngr-home', pathMatch: 'full' },
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-register', component: RegisterComponent },
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-admin', component: BoardAdminComponent, canActivate: [authenticationGuard] },
  { path: 'ngr-mod', component: BoardModeratorComponent, canActivate: [authenticationGuard] },
  {
    path: 'ngr-user', component: BoardUserComponent, canActivate: [authenticationGuard], children: [
      { path: 'ngr-preferences', component: PreferencesComponent },
      { path: 'ngr-rankings', component: RankingsComponent },
      { path: 'ngr-pronostics', component: PronosticsComponent },
      { path: 'ngr-charts', component: ChartsComponent },
      { path: 'ngr-profile', component: ProfileComponent }
    ]
  },
  { path: 'ngr-help', component: PerformHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
