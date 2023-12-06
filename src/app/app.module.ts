import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules-created/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RankingsComponent } from './rankings/rankings.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { ChartsComponent } from './charts/charts.component';
import { EspnComponent } from './home/espn/espn.component';
import { BusinessInsiderComponent } from './home/business-insider/business-insider.component';
import { BleacherReportComponent } from './home/bleacher-report/bleacher-report.component';
import { FightsComponent } from './rankings/fights/fights.component';
import { WinsComponent } from './rankings/wins/wins.component';
import { KoWinsComponent } from './rankings/ko-wins/ko-wins.component';
import { SubmissionsWinsComponent } from './rankings/submissions-wins/submissions-wins.component';
import { StrikesComponent } from './rankings/strikes/strikes.component';
import { StrikingRatioComponent } from './rankings/striking-ratio/striking-ratio.component';
import { TakedownsComponent } from './rankings/takedowns/takedowns.component';
import { TakedownDefenseComponent } from './rankings/takedown-defense/takedown-defense.component';
import { TakedownRatioComponent } from './rankings/takedown-ratio/takedown-ratio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './user-roles/admin/admin.component';
import { ModoComponent } from './user-roles/modo/modo.component';
import { UserComponent } from './user-roles/user/user.component';
import { ReqHttpInterceptor } from './common/interceptor/req-http.interceptor';
import { AuthenticationErrorComponent } from './auth/authentication-error/authentication-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RankingsComponent,
    ProfilesComponent,
    PronosticsComponent,
    ChartsComponent,
    EspnComponent,
    BusinessInsiderComponent,
    BleacherReportComponent,
    FightsComponent,
    WinsComponent,
    KoWinsComponent,
    SubmissionsWinsComponent,
    StrikesComponent,
    StrikingRatioComponent,
    TakedownsComponent,
    TakedownDefenseComponent,
    TakedownRatioComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ModoComponent,
    UserComponent,
    AuthenticationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: HTTP_INTERCEPTORS, useClass: ReqHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
