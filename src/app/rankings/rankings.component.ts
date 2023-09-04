import { Component, OnInit } from '@angular/core';
import { FigthersAndFightsElement } from '../common/utils/rankings-elements';
import { RankingsByFightsService } from '../common/services/rankings-services/rankings-by-fights.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})
export class RankingsComponent {

  womenStrawweight: FigthersAndFightsElement[] = [];
  womenFlyweight: FigthersAndFightsElement[] = [];
  womenBantamweight: FigthersAndFightsElement[] = [];
  womenFeatherweight: FigthersAndFightsElement[] = [];

  menFlyweight: FigthersAndFightsElement[] = [];
  menBantamweight: FigthersAndFightsElement[] = [];
  menFeatherweight: FigthersAndFightsElement[] = [];
  menLightweight: FigthersAndFightsElement[] = [];
  menWelterweight: FigthersAndFightsElement[] = [];
  menMiddleweight: FigthersAndFightsElement[] = [];
  menLightHeavyweight: FigthersAndFightsElement[] = [];
  menHeavyweight: FigthersAndFightsElement[] = [];

  constructor(public rankingsByFights: RankingsByFightsService) {
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
  }
}
