import { Component, OnInit } from '@angular/core';
import { FightersAndFightsElement, FightersAndWinsElement } from '../common/utils/rankings-elements';
import { RankingsByFightsService } from '../common/services/rankings-services/rankings-by-fights.service';
import { RankingsByVictoriesService } from '../common/services/rankings-services/rankings-by-victories.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})
export class RankingsComponent {

  womenStrawweight: FightersAndFightsElement[] = [];
  womenFlyweight: FightersAndFightsElement[] = [];
  womenBantamweight: FightersAndFightsElement[] = [];
  womenFeatherweight: FightersAndFightsElement[] = [];

  menFlyweight: FightersAndFightsElement[] = [];
  menBantamweight: FightersAndFightsElement[] = [];
  menFeatherweight: FightersAndFightsElement[] = [];
  menLightweight: FightersAndFightsElement[] = [];
  menWelterweight: FightersAndFightsElement[] = [];
  menMiddleweight: FightersAndFightsElement[] = [];
  menLightHeavyweight: FightersAndFightsElement[] = [];
  menHeavyweight: FightersAndFightsElement[] = [];

  womenStrawweightVictories: FightersAndWinsElement[] = [];
  womenFlyweightVictories: FightersAndWinsElement[] = [];
  womenBantamweightVictories: FightersAndWinsElement[] = [];
  womenFeatherweightVictories: FightersAndWinsElement[] = [];

  menFlyweightVictories: FightersAndWinsElement[] = [];
  menBantamweightVictories: FightersAndWinsElement[] = [];
  menFeatherweightVictories: FightersAndWinsElement[] = [];
  menLightweightVictories: FightersAndWinsElement[] = [];
  menWelterweightVictories: FightersAndWinsElement[] = [];
  menMiddleweightVictories: FightersAndWinsElement[] = [];
  menLightHeavyweightVictories: FightersAndWinsElement[] = [];
  menHeavyweightVictories: FightersAndWinsElement[] = [];

  constructor(public rankingsByFights: RankingsByFightsService, public rankingsByVictories: RankingsByVictoriesService) {

    this.womenStrawweight = this.rankingsByFights.womenStrawweight;
    this.womenFlyweight = this.rankingsByFights.womenFlyweight;
    this.womenBantamweight = this.rankingsByFights.womenBantamweight;
    this.womenFeatherweight = this.rankingsByFights.womenFeatherweight;

    this.menFlyweight = this.rankingsByFights.menFlyweight;
    this.menBantamweight = this.rankingsByFights.menBantamweight;
    this.menFeatherweight = this.rankingsByFights.menFeatherweight;
    this.menLightweight = this.rankingsByFights.menLightweight;
    this.menWelterweight = this.rankingsByFights.menWelterweight;
    this.menMiddleweight = this.rankingsByFights.menMiddleweight;
    this.menLightHeavyweight = this.rankingsByFights.menLightHeavyweight;
    this.menHeavyweight = this.rankingsByFights.menHeavyweight;


    this.womenStrawweightVictories = this.rankingsByVictories.womenStrawweight;
    this.womenFlyweightVictories = this.rankingsByVictories.womenFlyweight;
    this.womenBantamweightVictories = this.rankingsByVictories.womenBantamweight;
    this.womenFeatherweightVictories = this.rankingsByVictories.womenFeatherweight;

    this.menFlyweightVictories = this.rankingsByVictories.menFlyweight;
    this.menBantamweightVictories = this.rankingsByVictories.menBantamweight;
    this.menFeatherweightVictories = this.rankingsByVictories.menFeatherweight;
    this.menLightweightVictories = this.rankingsByVictories.menLightweight;
    this.menWelterweightVictories = this.rankingsByVictories.menWelterweight;
    this.menMiddleweightVictories = this.rankingsByVictories.menMiddleweight;
    this.menLightHeavyweightVictories = this.rankingsByVictories.menLightHeavyweight;
    this.menHeavyweightVictories = this.rankingsByVictories.menHeavyweight;
  }
}
