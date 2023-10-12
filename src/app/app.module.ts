import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RankingsComponent } from './rankings/rankings.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { PerformHelpComponent } from './perform-help/perform-help.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MenRankingsComponent } from './rankings/men-rankings/men-rankings.component';
import { WomenRankingsComponent } from './rankings/women-rankings/women-rankings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HashLocationStrategy, LocationStrategy, NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from "./app.material-module";
import { WomenBantamweightComponent } from './rankings/women-rankings/women-bantamweight/women-bantamweight.component';
import { WomenStrawweightComponent } from './rankings/women-rankings/women-strawweight/women-strawweight.component';
import { WomenFlyweightComponent } from './rankings/women-rankings/women-flyweight/women-flyweight.component';
import { WomenFeatherweightComponent } from './rankings/women-rankings/women-featherweight/women-featherweight.component';
import { MenHeavyweightComponent } from './rankings/men-rankings/men-heavyweight/men-heavyweight.component';
import { MenLightheavyweightComponent } from './rankings/men-rankings/men-lightheavyweight/men-lightheavyweight.component';
import { MenLightweightComponent } from './rankings/men-rankings/men-lightweight/men-lightweight.component';
import { MenMiddleweightComponent } from './rankings/men-rankings/men-middleweight/men-middleweight.component';
import { MenWelterweightComponent } from './rankings/men-rankings/men-welterweight/men-welterweight.component';
import { MenBantamweightComponent } from './rankings/men-rankings/men-bantamweight/men-bantamweight.component';
import { MenFeatherweightComponent } from './rankings/men-rankings/men-featherweight/men-featherweight.component';
import { MenFlyweightComponent } from './rankings/men-rankings/men-flyweight/men-flyweight.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AppHttpInterceptor } from './common/interceptors/app-http.interceptor';
import { PreferencesComponent } from './preferences/preferences.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChartsComponent } from './charts/charts.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RankingsComponent,
    PronosticsComponent,
    PerformHelpComponent,
    MenRankingsComponent,
    WomenRankingsComponent,
    WomenStrawweightComponent,
    WomenFlyweightComponent,
    WomenBantamweightComponent,
    WomenFeatherweightComponent,
    MenHeavyweightComponent,
    MenLightheavyweightComponent,
    MenLightweightComponent,
    MenMiddleweightComponent,
    MenWelterweightComponent,
    MenBantamweightComponent,
    MenFeatherweightComponent,
    MenFlyweightComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    PreferencesComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    NgFor,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }