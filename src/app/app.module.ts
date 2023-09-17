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
import { ConfigurationsComponent } from './configurations/configurations.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { GraphsComponent } from './graphs/graphs.component';
import { PerformHelpComponent } from './perform-help/perform-help.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MenRankingsComponent } from './rankings/men-rankings/men-rankings.component';
import { WomenRankingsComponent } from './rankings/women-rankings/women-rankings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RankingsComponent,
    ConfigurationsComponent,
    PronosticsComponent,
    GraphsComponent,
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
    MenFlyweightComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
