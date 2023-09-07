import { Component, OnInit } from '@angular/core';
import {
  FightersAndFightsElement,
  FightersAndIpsgElement,
  FightersAndKoWinsElement,
  FightersAndStrikesElement,
  FightersAndStrkRatioElement,
  FightersAndSubWinsElement,
  FightersAndTkdownDElement,
  FightersAndTkdownRElement,
  FightersAndTkdownsElement,
  FightersAndWinsElement
} from '../common/utils/rankings-elements';
import { RankingsByFightsService } from '../common/services/rankings-services/rankings-by-fights.service';
import { RankingsByVictoriesService } from '../common/services/rankings-services/rankings-by-victories.service';
import { RankingsByIpsgService } from '../common/services/rankings-services/rankings-by-ipsg.service';
import { RankingsByKowinsService } from '../common/services/rankings-services/rankings-by-kowins.service';
import { RankingsByStrikesService } from '../common/services/rankings-services/rankings-by-strikes.service';
import { RankingsByStrikesratioService } from '../common/services/rankings-services/rankings-by-strikesratio.service';
import { RankingsBySubmissionswinsService } from '../common/services/rankings-services/rankings-by-submissionswins.service';
import { RankingsByTakedowndefenseService } from '../common/services/rankings-services/rankings-by-takedowndefense.service';
import { RankingsByTakedownsService } from '../common/services/rankings-services/rankings-by-takedowns.service';
import { RankingsByTakedownsratioService } from '../common/services/rankings-services/rankings-by-takedownsratio.service';


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

  womenStrawweightKoWins: FightersAndKoWinsElement[] = [];
  womenFlyweightKoWins: FightersAndKoWinsElement[] = [];
  womenBantamweightKoWins: FightersAndKoWinsElement[] = [];
  womenFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  menFlyweightKoWins: FightersAndKoWinsElement[] = [];
  menBantamweightKoWins: FightersAndKoWinsElement[] = [];
  menFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  menLightweightKoWins: FightersAndKoWinsElement[] = [];
  menWelterweightKoWins: FightersAndKoWinsElement[] = [];
  menMiddleweightKoWins: FightersAndKoWinsElement[] = [];
  menLightHeavyweightKoWins: FightersAndKoWinsElement[] = [];
  menHeavyweightKoWins: FightersAndKoWinsElement[] = [];

  womenStrawweightIpsg: FightersAndIpsgElement[] = [];
  womenFlyweightIpsg: FightersAndIpsgElement[] = [];
  womenBantamweightIpsg: FightersAndIpsgElement[] = [];
  womenFeatherweightIpsg: FightersAndIpsgElement[] = [];
  menFlyweightIpsg: FightersAndIpsgElement[] = [];
  menBantamweightIpsg: FightersAndIpsgElement[] = [];
  menFeatherweightIpsg: FightersAndIpsgElement[] = [];
  menLightweightIpsg: FightersAndIpsgElement[] = [];
  menWelterweightIpsg: FightersAndIpsgElement[] = [];
  menMiddleweightIpsg: FightersAndIpsgElement[] = [];
  menLightHeavyweightIpsg: FightersAndIpsgElement[] = [];
  menHeavyweightIpsg: FightersAndIpsgElement[] = [];

  womenStrawweightTkdownR: FightersAndTkdownRElement[] = [];
  womenFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  womenBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  womenFeatherweightTkdownR: FightersAndTkdownRElement[] = [];
  menFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  menBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  menFeatherweightTkdownR: FightersAndTkdownRElement[] = [];
  menLightweightTkdownR: FightersAndTkdownRElement[] = [];
  menWelterweightTkdownR: FightersAndTkdownRElement[] = [];
  menMiddleweightTkdownR: FightersAndTkdownRElement[] = [];
  menLightHeavyweightTkdownR: FightersAndTkdownRElement[] = [];
  menHeavyweightTkdownR: FightersAndTkdownRElement[] = [];

  womenStrawweightTkdownD: FightersAndTkdownDElement[] = [];
  womenFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  womenBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  womenFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  menFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  menBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  menFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  menLightweightTkdownD: FightersAndTkdownDElement[] = [];
  menWelterweightTkdownD: FightersAndTkdownDElement[] = [];
  menMiddleweightTkdownD: FightersAndTkdownDElement[] = [];
  menLightHeavyweightTkdownD: FightersAndTkdownDElement[] = [];
  menHeavyweightTkdownD: FightersAndTkdownDElement[] = [];


  womenStrawweightTkdowns: FightersAndTkdownsElement[] = [];
  womenFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  womenBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  womenFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  menFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  menBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  menFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  menLightweightTkdowns: FightersAndTkdownsElement[] = [];
  menWelterweightTkdowns: FightersAndTkdownsElement[] = [];
  menMiddleweightTkdowns: FightersAndTkdownsElement[] = [];
  menLightHeavyweightTkdowns: FightersAndTkdownsElement[] = [];
  menHeavyweightTkdowns: FightersAndTkdownsElement[] = [];

  womenStrawweightSRatio: FightersAndStrkRatioElement[] = [];
  womenFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  womenBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  womenFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  menFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  menBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  menFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  menLightweightSRatio: FightersAndStrkRatioElement[] = [];
  menWelterweightSRatio: FightersAndStrkRatioElement[] = [];
  menMiddleweightSRatio: FightersAndStrkRatioElement[] = [];
  menLightHeavyweightSRatio: FightersAndStrkRatioElement[] = [];
  menHeavyweightSRatio: FightersAndStrkRatioElement[] = [];


  womenStrawweightStrikes: FightersAndStrikesElement[] = [];
  womenFlyweightStrikes: FightersAndStrikesElement[] = [];
  womenBantamweightStrikes: FightersAndStrikesElement[] = [];
  womenFeatherweightStrikes: FightersAndStrikesElement[] = [];
  menFlyweightStrikes: FightersAndStrikesElement[] = [];
  menBantamweightStrikes: FightersAndStrikesElement[] = [];
  menFeatherweightStrikes: FightersAndStrikesElement[] = [];
  menLightweightStrikes: FightersAndStrikesElement[] = [];
  menWelterweightStrikes: FightersAndStrikesElement[] = [];
  menMiddleweightStrikes: FightersAndStrikesElement[] = [];
  menLightHeavyweightStrikes: FightersAndStrikesElement[] = [];
  menHeavyweightStrikes: FightersAndStrikesElement[] = [];

  womenStrawweightSubWins: FightersAndSubWinsElement[] = [];
  womenFlyweightSubWins: FightersAndSubWinsElement[] = [];
  womenBantamweightSubWins: FightersAndSubWinsElement[] = [];
  womenFeatherweightSubWins: FightersAndSubWinsElement[] = [];
  menFlyweightSubWins: FightersAndSubWinsElement[] = [];
  menBantamweightSubWins: FightersAndSubWinsElement[] = [];
  menFeatherweightSubWins: FightersAndSubWinsElement[] = [];
  menLightweightSubWins: FightersAndSubWinsElement[] = [];
  menWelterweightSubWins: FightersAndSubWinsElement[] = [];
  menMiddleweightSubWins: FightersAndSubWinsElement[] = [];
  menLightHeavyweightSubWins: FightersAndSubWinsElement[] = [];
  menHeavyweightSubWins: FightersAndSubWinsElement[] = [];

  constructor(
    public rankingsByFights: RankingsByFightsService,
    public rankingsByVictories: RankingsByVictoriesService,
    public rankingsByIpsg: RankingsByIpsgService,
    public rankingsByKowins: RankingsByKowinsService,
    public rankingsByStrikes: RankingsByStrikesService,
    public rankingsByStrikesRatio: RankingsByStrikesratioService,
    public rankingsBySubmissions: RankingsBySubmissionswinsService,
    public rankingsByTakedownDefense: RankingsByTakedowndefenseService,
    public rankingsByTakedowns: RankingsByTakedownsService,
    public rankingsByTakedownRatio: RankingsByTakedownsratioService
  ) {

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


    this.womenStrawweightIpsg = this.rankingsByIpsg.womenStrawweight;
    this.womenFlyweightIpsg = this.rankingsByIpsg.womenFlyweight;
    this.womenBantamweightIpsg = this.rankingsByIpsg.womenBantamweight;
    this.womenFeatherweightIpsg = this.rankingsByIpsg.womenFeatherweight;
    this.menFlyweightIpsg = this.rankingsByIpsg.menFlyweight;
    this.menBantamweightIpsg = this.rankingsByIpsg.menBantamweight;
    this.menFeatherweightIpsg = this.rankingsByIpsg.menFeatherweight;
    this.menLightweightIpsg = this.rankingsByIpsg.menLightweight;
    this.menWelterweightIpsg = this.rankingsByIpsg.menWelterweight;
    this.menMiddleweightIpsg = this.rankingsByIpsg.menMiddleweight;
    this.menLightHeavyweightIpsg = this.rankingsByIpsg.menLightHeavyweight;
    this.menHeavyweightIpsg = this.rankingsByIpsg.menHeavyweight;


    this.womenStrawweightKoWins = this.rankingsByKowins.womenStrawweight;
    this.womenFlyweightKoWins = this.rankingsByKowins.womenFlyweight;
    this.womenBantamweightKoWins = this.rankingsByKowins.womenBantamweight;
    this.womenFeatherweightKoWins = this.rankingsByKowins.womenFeatherweight;
    this.menFlyweightKoWins = this.rankingsByKowins.menFlyweight;
    this.menBantamweightKoWins = this.rankingsByKowins.menBantamweight;
    this.menFeatherweightKoWins = this.rankingsByKowins.menFeatherweight;
    this.menLightweightKoWins = this.rankingsByKowins.menLightweight;
    this.menWelterweightKoWins = this.rankingsByKowins.menWelterweight;
    this.menMiddleweightKoWins = this.rankingsByKowins.menMiddleweight;
    this.menLightHeavyweightKoWins = this.rankingsByKowins.menLightHeavyweight;
    this.menHeavyweightKoWins = this.rankingsByKowins.menHeavyweight;


    this.womenStrawweightStrikes = this.rankingsByStrikes.womenStrawweight;
    this.womenFlyweightStrikes = this.rankingsByStrikes.womenFlyweight;
    this.womenBantamweightStrikes = this.rankingsByStrikes.womenBantamweight;
    this.womenFeatherweightStrikes = this.rankingsByStrikes.womenFeatherweight;
    this.menFlyweightStrikes = this.rankingsByStrikes.menFlyweight;
    this.menBantamweightStrikes = this.rankingsByStrikes.menBantamweight;
    this.menFeatherweightStrikes = this.rankingsByStrikes.menFeatherweight;
    this.menLightweightStrikes = this.rankingsByStrikes.menLightweight;
    this.menWelterweightStrikes = this.rankingsByStrikes.menWelterweight;
    this.menMiddleweightStrikes = this.rankingsByStrikes.menMiddleweight;
    this.menLightHeavyweightStrikes = this.rankingsByStrikes.menLightHeavyweight;
    this.menHeavyweightStrikes = this.rankingsByStrikes.menHeavyweight;


    this.womenStrawweightSRatio = this.rankingsByStrikesRatio.womenStrawweight;
    this.womenFlyweightSRatio = this.rankingsByStrikesRatio.womenFlyweight;
    this.womenBantamweightSRatio = this.rankingsByStrikesRatio.womenBantamweight;
    this.womenFeatherweightSRatio = this.rankingsByStrikesRatio.womenFeatherweight;
    this.menFlyweightSRatio = this.rankingsByStrikesRatio.menFlyweight;
    this.menBantamweightSRatio = this.rankingsByStrikesRatio.menBantamweight;
    this.menFeatherweightSRatio = this.rankingsByStrikesRatio.menFeatherweight;
    this.menLightweightSRatio = this.rankingsByStrikesRatio.menLightweight;
    this.menWelterweightSRatio = this.rankingsByStrikesRatio.menWelterweight;
    this.menMiddleweightSRatio = this.rankingsByStrikesRatio.menMiddleweight;
    this.menLightHeavyweightSRatio = this.rankingsByStrikesRatio.menLightHeavyweight;
    this.menHeavyweightSRatio = this.rankingsByStrikesRatio.menHeavyweight;


    this.womenStrawweightSubWins = this.rankingsBySubmissions.womenStrawweight;
    this.womenFlyweightSubWins = this.rankingsBySubmissions.womenFlyweight;
    this.womenBantamweightSubWins = this.rankingsBySubmissions.womenBantamweight;
    this.womenFeatherweightSubWins = this.rankingsBySubmissions.womenFeatherweight;
    this.menFlyweightSubWins = this.rankingsBySubmissions.menFlyweight;
    this.menBantamweightSubWins = this.rankingsBySubmissions.menBantamweight;
    this.menFeatherweightSubWins = this.rankingsBySubmissions.menFeatherweight;
    this.menLightweightSubWins = this.rankingsBySubmissions.menLightweight;
    this.menWelterweightSubWins = this.rankingsBySubmissions.menWelterweight;
    this.menMiddleweightSubWins = this.rankingsBySubmissions.menMiddleweight;
    this.menLightHeavyweightSubWins = this.rankingsBySubmissions.menLightHeavyweight;
    this.menHeavyweightSubWins = this.rankingsBySubmissions.menHeavyweight;

    this.womenStrawweightTkdownD = this.rankingsByTakedownDefense.womenStrawweight;
    this.womenFlyweightTkdownD = this.rankingsByTakedownDefense.womenFlyweight;
    this.womenBantamweightTkdownD = this.rankingsByTakedownDefense.womenBantamweight;
    this.womenFeatherweightTkdownD = this.rankingsByTakedownDefense.womenFeatherweight;
    this.menFlyweightTkdownD = this.rankingsByTakedownDefense.menFlyweight;
    this.menBantamweightTkdownD = this.rankingsByTakedownDefense.menBantamweight;
    this.menFeatherweightTkdownD = this.rankingsByTakedownDefense.menFeatherweight;
    this.menLightweightTkdownD = this.rankingsByTakedownDefense.menLightweight;
    this.menWelterweightTkdownD = this.rankingsByTakedownDefense.menWelterweight;
    this.menMiddleweightTkdownD = this.rankingsByTakedownDefense.menMiddleweight;
    this.menLightHeavyweightTkdownD = this.rankingsByTakedownDefense.menLightHeavyweight;
    this.menHeavyweightTkdownD = this.rankingsByTakedownDefense.menHeavyweight;


    this.womenStrawweightTkdowns = this.rankingsByTakedowns.womenStrawweight;
    this.womenFlyweightTkdowns = this.rankingsByTakedowns.womenFlyweight;
    this.womenBantamweightTkdowns = this.rankingsByTakedowns.womenBantamweight;
    this.womenFeatherweightTkdowns = this.rankingsByTakedowns.womenFeatherweight;
    this.menFlyweightTkdowns = this.rankingsByTakedowns.menFlyweight;
    this.menBantamweightTkdowns = this.rankingsByTakedowns.menBantamweight;
    this.menFeatherweightTkdowns = this.rankingsByTakedowns.menFeatherweight;
    this.menLightweightTkdowns = this.rankingsByTakedowns.menLightweight;
    this.menWelterweightTkdowns = this.rankingsByTakedowns.menWelterweight;
    this.menMiddleweightTkdowns = this.rankingsByTakedowns.menMiddleweight;
    this.menLightHeavyweightTkdowns = this.rankingsByTakedowns.menLightHeavyweight;
    this.menHeavyweightTkdowns = this.rankingsByTakedowns.menHeavyweight;


    this.womenStrawweightTkdownR = this.rankingsByTakedownRatio.womenStrawweight;
    this.womenFlyweightTkdownR = this.rankingsByTakedownRatio.womenFlyweight;
    this.womenBantamweightTkdownR = this.rankingsByTakedownRatio.womenBantamweight;
    this.womenFeatherweightTkdownR = this.rankingsByTakedownRatio.womenFeatherweight;
    this.menFlyweightTkdownR = this.rankingsByTakedownRatio.menFlyweight;
    this.menBantamweightTkdownR = this.rankingsByTakedownRatio.menBantamweight;
    this.menFeatherweightTkdownR = this.rankingsByTakedownRatio.menFeatherweight;
    this.menLightweightTkdownR = this.rankingsByTakedownRatio.menLightweight;
    this.menWelterweightTkdownR = this.rankingsByTakedownRatio.menWelterweight;
    this.menMiddleweightTkdownR = this.rankingsByTakedownRatio.menMiddleweight;
    this.menLightHeavyweightTkdownR = this.rankingsByTakedownRatio.menLightHeavyweight;
    this.menHeavyweightTkdownR = this.rankingsByTakedownRatio.menHeavyweight;
  }
}
