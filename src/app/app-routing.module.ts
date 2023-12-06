import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PronosticsComponent } from './pronostics/pronostics.component';
// import { PerformHelpComponent } from './perform-help/perform-help.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user-roles/user/user.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { ChartsComponent } from './charts/charts.component';
import { ModoComponent } from './user-roles/modo/modo.component';
import { AdminComponent } from './user-roles/admin/admin.component';
import { authenticationGuard } from './common/guards/authentication/authentication.guard';
import { AuthenticationErrorComponent } from './auth/authentication-error/authentication-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngr-home', pathMatch: 'full' },
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-register', component: RegisterComponent },
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-errorAuthen', component: AuthenticationErrorComponent },
  // { path: 'ngr-help', component: PerformHelpComponent },
  { path: 'ngr-admin', component: AdminComponent, canActivate: [authenticationGuard] },
  { path: 'ngr-modo', component: ModoComponent, canActivate: [authenticationGuard] },
  {
    path: 'ngr-user', component: UserComponent, canActivate: [authenticationGuard], children: [
      { path: 'ngr-rankings', component: RankingsComponent },
      { path: 'ngr-pronostics', component: PronosticsComponent },
      { path: 'ngr-charts', component: ChartsComponent },
      { path: 'ngr-profiles', component: ProfilesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
