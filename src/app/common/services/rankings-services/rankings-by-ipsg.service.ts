import { Injectable } from '@angular/core';
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
} from '../../utils/rankings-elements';
import { RankingsService } from './rankings.service';
import { RankingsByFightsService } from './rankings-by-fights.service';
import { RankingsByKowinsService } from './rankings-by-kowins.service';
import { RankingsByStrikesService } from './rankings-by-strikes.service';
import { RankingsByStrikesratioService } from './rankings-by-strikesratio.service';
import { RankingsBySubmissionswinsService } from './rankings-by-submissionswins.service';
import { RankingsByTakedowndefenseService } from './rankings-by-takedowndefense.service';
import { RankingsByTakedownsService } from './rankings-by-takedowns.service';
import { RankingsByTakedownsratioService } from './rankings-by-takedownsratio.service';
import { RankingsByVictoriesService } from './rankings-by-victories.service';

@Injectable({
  providedIn: 'root'
})

export class RankingsByIpsgService {

  menArray: FightersAndIpsgElement[] = [];
  womenArray: FightersAndIpsgElement[] = [];

  womenStrawweight: FightersAndFightsElement[] = [];
  womenStrawweightVictories: FightersAndWinsElement[] = [];
  womenStrawweightKoWins: FightersAndKoWinsElement[] = [];
  womenStrawweightTkdownR: FightersAndTkdownRElement[] = [];
  womenStrawweightTkdownD: FightersAndTkdownDElement[] = [];
  womenStrawweightTkdowns: FightersAndTkdownsElement[] = [];
  womenStrawweightSRatio: FightersAndStrkRatioElement[] = [];
  womenStrawweightStrikes: FightersAndStrikesElement[] = [];
  womenStrawweightSubWins: FightersAndSubWinsElement[] = [];
  womenStrawweightIpsg: FightersAndIpsgElement[] = [];

  womenFlyweight: FightersAndFightsElement[] = [];
  womenFlyweightVictories: FightersAndWinsElement[] = [];
  womenFlyweightKoWins: FightersAndKoWinsElement[] = [];
  womenFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  womenFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  womenFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  womenFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  womenFlyweightStrikes: FightersAndStrikesElement[] = [];
  womenFlyweightSubWins: FightersAndSubWinsElement[] = [];
  womenFlyweightIpsg: FightersAndIpsgElement[] = [];

  womenBantamweight: FightersAndFightsElement[] = [];
  womenBantamweightVictories: FightersAndWinsElement[] = [];
  womenBantamweightKoWins: FightersAndKoWinsElement[] = [];
  womenBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  womenBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  womenBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  womenBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  womenBantamweightStrikes: FightersAndStrikesElement[] = [];
  womenBantamweightSubWins: FightersAndSubWinsElement[] = [];
  womenBantamweightIpsg: FightersAndIpsgElement[] = [];

  womenFeatherweight: FightersAndFightsElement[] = [];
  womenFeatherweightVictories: FightersAndWinsElement[] = [];
  womenFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  womenFeatherweightTkdownR: FightersAndTkdownRElement[] = [];
  womenFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  womenFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  womenFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  womenFeatherweightStrikes: FightersAndStrikesElement[] = [];
  womenFeatherweightSubWins: FightersAndSubWinsElement[] = [];
  womenFeatherweightIpsg: FightersAndIpsgElement[] = [];

  menFlyweight: FightersAndFightsElement[] = [];
  menFlyweightVictories: FightersAndWinsElement[] = [];
  menFlyweightKoWins: FightersAndKoWinsElement[] = [];
  menFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  menFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  menFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  menFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  menFlyweightStrikes: FightersAndStrikesElement[] = [];
  menFlyweightSubWins: FightersAndSubWinsElement[] = [];
  menFlyweightIpsg: FightersAndIpsgElement[] = [];

  menBantamweight: FightersAndFightsElement[] = [];
  menBantamweightVictories: FightersAndWinsElement[] = [];
  menBantamweightKoWins: FightersAndKoWinsElement[] = [];
  menBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  menBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  menBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  menBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  menBantamweightStrikes: FightersAndStrikesElement[] = [];
  menBantamweightSubWins: FightersAndSubWinsElement[] = [];
  menBantamweightIpsg: FightersAndIpsgElement[] = [];

  menFeatherweight: FightersAndFightsElement[] = [];
  menFeatherweightVictories: FightersAndWinsElement[] = [];
  menFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  menFeatherweightTkdownR: FightersAndTkdownRElement[] = [];
  menFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  menFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  menFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  menFeatherweightStrikes: FightersAndStrikesElement[] = [];
  menFeatherweightSubWins: FightersAndSubWinsElement[] = [];

  menFeatherweightIpsg: FightersAndIpsgElement[] = [];

  menLightweight: FightersAndFightsElement[] = [];
  menLightweightVictories: FightersAndWinsElement[] = [];
  menLightweightKoWins: FightersAndKoWinsElement[] = [];
  menLightweightTkdownR: FightersAndTkdownRElement[] = [];
  menLightweightTkdownD: FightersAndTkdownDElement[] = [];
  menLightweightTkdowns: FightersAndTkdownsElement[] = [];
  menLightweightSRatio: FightersAndStrkRatioElement[] = [];
  menLightweightStrikes: FightersAndStrikesElement[] = [];
  menLightweightSubWins: FightersAndSubWinsElement[] = [];
  menLightweightIpsg: FightersAndIpsgElement[] = [];

  menWelterweight: FightersAndFightsElement[] = [];
  menWelterweightVictories: FightersAndWinsElement[] = [];
  menWelterweightKoWins: FightersAndKoWinsElement[] = [];
  menWelterweightTkdownR: FightersAndTkdownRElement[] = [];
  menWelterweightTkdownD: FightersAndTkdownDElement[] = [];
  menWelterweightTkdowns: FightersAndTkdownsElement[] = [];
  menWelterweightSRatio: FightersAndStrkRatioElement[] = [];
  menWelterweightStrikes: FightersAndStrikesElement[] = [];
  menWelterweightSubWins: FightersAndSubWinsElement[] = [];
  menWelterweightIpsg: FightersAndIpsgElement[] = [];

  menMiddleweight: FightersAndFightsElement[] = [];
  menMiddleweightVictories: FightersAndWinsElement[] = [];
  menMiddleweightKoWins: FightersAndKoWinsElement[] = [];
  menMiddleweightTkdownR: FightersAndTkdownRElement[] = [];
  menMiddleweightTkdownD: FightersAndTkdownDElement[] = [];
  menMiddleweightTkdowns: FightersAndTkdownsElement[] = [];
  menMiddleweightSRatio: FightersAndStrkRatioElement[] = [];
  menMiddleweightStrikes: FightersAndStrikesElement[] = [];
  menMiddleweightSubWins: FightersAndSubWinsElement[] = [];
  menMiddleweightIpsg: FightersAndIpsgElement[] = [];


  menLightHeavyweight: FightersAndFightsElement[] = [];
  menLightHeavyweightVictories: FightersAndWinsElement[] = [];
  menLightHeavyweightKoWins: FightersAndKoWinsElement[] = [];
  menLightHeavyweightTkdownR: FightersAndTkdownRElement[] = [];
  menLightHeavyweightTkdownD: FightersAndTkdownDElement[] = [];
  menLightHeavyweightTkdowns: FightersAndTkdownsElement[] = [];
  menLightHeavyweightSRatio: FightersAndStrkRatioElement[] = [];
  menLightHeavyweightStrikes: FightersAndStrikesElement[] = [];
  menLightHeavyweightSubWins: FightersAndSubWinsElement[] = [];
  menLightHeavyweightIpsg: FightersAndIpsgElement[] = [];

  menHeavyweight: FightersAndFightsElement[] = [];
  menHeavyweightVictories: FightersAndWinsElement[] = [];
  menHeavyweightKoWins: FightersAndKoWinsElement[] = [];
  menHeavyweightTkdownR: FightersAndTkdownRElement[] = [];
  menHeavyweightTkdownD: FightersAndTkdownDElement[] = [];
  menHeavyweightTkdowns: FightersAndTkdownsElement[] = [];
  menHeavyweightSRatio: FightersAndStrkRatioElement[] = [];
  menHeavyweightStrikes: FightersAndStrikesElement[] = [];
  menHeavyweightSubWins: FightersAndSubWinsElement[] = [];
  menHeavyweightIpsg: FightersAndIpsgElement[] = [];

  defaultTab: FightersAndIpsgElement[] = [];

  constructor(
    public rankingsService: RankingsService,
    public rankingsByFights: RankingsByFightsService,
    public rankingsByVictories: RankingsByVictoriesService,
    public rankingsByKowins: RankingsByKowinsService,
    public rankingsByStrikes: RankingsByStrikesService,
    public rankingsByStrikesRatio: RankingsByStrikesratioService,
    public rankingsBySubmissions: RankingsBySubmissionswinsService,
    public rankingsByTakedownDefense: RankingsByTakedowndefenseService,
    public rankingsByTakedowns: RankingsByTakedownsService,
    public rankingsByTakedownRatio: RankingsByTakedownsratioService) {

    this.womenStrawweight = this.rankingsByFights.womenStrawweight;
    this.womenStrawweightVictories = this.rankingsByVictories.womenStrawweight;
    this.womenStrawweightKoWins = this.rankingsByKowins.womenStrawweight;
    this.womenStrawweightStrikes = this.rankingsByStrikes.womenStrawweight;
    this.womenStrawweightSRatio = this.rankingsByStrikesRatio.womenStrawweight;
    this.womenStrawweightSubWins = this.rankingsBySubmissions.womenStrawweight;
    this.womenStrawweightTkdownD = this.rankingsByTakedownDefense.womenStrawweight;
    this.womenStrawweightTkdowns = this.rankingsByTakedowns.womenStrawweight;
    this.womenStrawweightTkdownR = this.rankingsByTakedownRatio.womenStrawweight;

    this.womenFlyweight = this.rankingsByFights.womenFlyweight;
    this.womenFlyweightVictories = this.rankingsByVictories.womenFlyweight;
    this.womenFlyweightKoWins = this.rankingsByKowins.womenFlyweight;
    this.womenFlyweightStrikes = this.rankingsByStrikes.womenFlyweight;
    this.womenFlyweightSRatio = this.rankingsByStrikesRatio.womenFlyweight;
    this.womenFlyweightSubWins = this.rankingsBySubmissions.womenFlyweight;
    this.womenFlyweightTkdownD = this.rankingsByTakedownDefense.womenFlyweight;
    this.womenFlyweightTkdowns = this.rankingsByTakedowns.womenFlyweight;
    this.womenFlyweightTkdownR = this.rankingsByTakedownRatio.womenFlyweight;


    this.womenBantamweight = this.rankingsByFights.womenBantamweight;
    this.womenBantamweightVictories = this.rankingsByVictories.womenBantamweight;
    this.womenBantamweightKoWins = this.rankingsByKowins.womenBantamweight;
    this.womenBantamweightStrikes = this.rankingsByStrikes.womenBantamweight;
    this.womenBantamweightSRatio = this.rankingsByStrikesRatio.womenBantamweight;
    this.womenBantamweightSubWins = this.rankingsBySubmissions.womenBantamweight;
    this.womenBantamweightTkdownD = this.rankingsByTakedownDefense.womenBantamweight;
    this.womenBantamweightTkdowns = this.rankingsByTakedowns.womenBantamweight;
    this.womenBantamweightTkdownR = this.rankingsByTakedownRatio.womenBantamweight;


    this.womenFeatherweight = this.rankingsByFights.womenFeatherweight;
    this.womenFeatherweightVictories = this.rankingsByVictories.womenFeatherweight;
    this.womenFeatherweightKoWins = this.rankingsByKowins.womenFeatherweight;
    this.womenFeatherweightStrikes = this.rankingsByStrikes.womenFeatherweight;
    this.womenFeatherweightSRatio = this.rankingsByStrikesRatio.womenFeatherweight;
    this.womenFeatherweightSubWins = this.rankingsBySubmissions.womenFeatherweight;
    this.womenFeatherweightTkdownD = this.rankingsByTakedownDefense.womenFeatherweight;
    this.womenFeatherweightTkdowns = this.rankingsByTakedowns.womenFeatherweight;
    this.womenFeatherweightTkdownR = this.rankingsByTakedownRatio.womenFeatherweight;


    this.menFlyweight = this.rankingsByFights.menFlyweight;
    this.menFlyweightVictories = this.rankingsByVictories.menFlyweight;
    this.menFlyweightKoWins = this.rankingsByKowins.menFlyweight;
    this.menFlyweightStrikes = this.rankingsByStrikes.menFlyweight;
    this.menFlyweightSRatio = this.rankingsByStrikesRatio.menFlyweight;
    this.menFlyweightSubWins = this.rankingsBySubmissions.menFlyweight;
    this.menFlyweightTkdownD = this.rankingsByTakedownDefense.menFlyweight;
    this.menFlyweightTkdowns = this.rankingsByTakedowns.menFlyweight;
    this.menFlyweightTkdownR = this.rankingsByTakedownRatio.menFlyweight;


    this.menBantamweight = this.rankingsByFights.menBantamweight;
    this.menBantamweightVictories = this.rankingsByVictories.menBantamweight;
    this.menBantamweightKoWins = this.rankingsByKowins.menBantamweight;
    this.menBantamweightStrikes = this.rankingsByStrikes.menBantamweight;
    this.menBantamweightSRatio = this.rankingsByStrikesRatio.menBantamweight;
    this.menBantamweightSubWins = this.rankingsBySubmissions.menBantamweight;
    this.menBantamweightTkdownD = this.rankingsByTakedownDefense.menBantamweight;
    this.menBantamweightTkdowns = this.rankingsByTakedowns.menBantamweight;
    this.menBantamweightTkdownR = this.rankingsByTakedownRatio.menBantamweight;


    this.menFeatherweight = this.rankingsByFights.menFeatherweight;
    this.menFeatherweightVictories = this.rankingsByVictories.menFeatherweight;
    this.menFeatherweightKoWins = this.rankingsByKowins.menFeatherweight;
    this.menFeatherweightStrikes = this.rankingsByStrikes.menFeatherweight;
    this.menFeatherweightSRatio = this.rankingsByStrikesRatio.menFeatherweight;
    this.menFeatherweightSubWins = this.rankingsBySubmissions.menFeatherweight;
    this.menFeatherweightTkdownD = this.rankingsByTakedownDefense.menFeatherweight;
    this.menFeatherweightTkdowns = this.rankingsByTakedowns.menFeatherweight;
    this.menFeatherweightTkdownR = this.rankingsByTakedownRatio.menFeatherweight;


    this.menLightweight = this.rankingsByFights.menLightweight;
    this.menLightweightVictories = this.rankingsByVictories.menLightweight;
    this.menLightweightKoWins = this.rankingsByKowins.menLightweight;
    this.menLightweightStrikes = this.rankingsByStrikes.menLightweight;
    this.menLightweightSRatio = this.rankingsByStrikesRatio.menLightweight;
    this.menLightweightSubWins = this.rankingsBySubmissions.menLightweight;
    this.menLightweightTkdownD = this.rankingsByTakedownDefense.menLightweight;
    this.menLightweightTkdowns = this.rankingsByTakedowns.menLightweight;
    this.menLightweightTkdownR = this.rankingsByTakedownRatio.menLightweight;


    this.menWelterweight = this.rankingsByFights.menWelterweight;
    this.menWelterweightVictories = this.rankingsByVictories.menWelterweight;
    this.menWelterweightKoWins = this.rankingsByKowins.menWelterweight;
    this.menWelterweightStrikes = this.rankingsByStrikes.menWelterweight;
    this.menWelterweightSRatio = this.rankingsByStrikesRatio.menWelterweight;
    this.menWelterweightSubWins = this.rankingsBySubmissions.menWelterweight;
    this.menWelterweightTkdownD = this.rankingsByTakedownDefense.menWelterweight;
    this.menWelterweightTkdowns = this.rankingsByTakedowns.menWelterweight;
    this.menWelterweightTkdownR = this.rankingsByTakedownRatio.menWelterweight;


    this.menMiddleweight = this.rankingsByFights.menMiddleweight;
    this.menMiddleweightVictories = this.rankingsByVictories.menMiddleweight;
    this.menMiddleweightKoWins = this.rankingsByKowins.menMiddleweight;
    this.menMiddleweightStrikes = this.rankingsByStrikes.menMiddleweight;
    this.menMiddleweightSRatio = this.rankingsByStrikesRatio.menMiddleweight;
    this.menMiddleweightSubWins = this.rankingsBySubmissions.menMiddleweight;
    this.menMiddleweightTkdownD = this.rankingsByTakedownDefense.menMiddleweight;
    this.menMiddleweightTkdowns = this.rankingsByTakedowns.menMiddleweight;
    this.menMiddleweightTkdownR = this.rankingsByTakedownRatio.menMiddleweight;


    this.menLightHeavyweight = this.rankingsByFights.menLightHeavyweight;
    this.menLightHeavyweightVictories = this.rankingsByVictories.menLightHeavyweight;
    this.menLightHeavyweightKoWins = this.rankingsByKowins.menLightHeavyweight;
    this.menLightHeavyweightStrikes = this.rankingsByStrikes.menLightHeavyweight;
    this.menLightHeavyweightSRatio = this.rankingsByStrikesRatio.menLightHeavyweight;
    this.menLightHeavyweightSubWins = this.rankingsBySubmissions.menLightHeavyweight;
    this.menLightHeavyweightTkdownD = this.rankingsByTakedownDefense.menLightHeavyweight;
    this.menLightHeavyweightTkdowns = this.rankingsByTakedowns.menLightHeavyweight;
    this.menLightHeavyweightTkdownR = this.rankingsByTakedownRatio.menLightHeavyweight;


    this.menHeavyweight = this.rankingsByFights.menHeavyweight;
    this.menHeavyweightVictories = this.rankingsByVictories.menHeavyweight;
    this.menHeavyweightKoWins = this.rankingsByKowins.menHeavyweight;
    this.menHeavyweightStrikes = this.rankingsByStrikes.menHeavyweight;
    this.menHeavyweightSRatio = this.rankingsByStrikesRatio.menHeavyweight;
    this.menHeavyweightSubWins = this.rankingsBySubmissions.menHeavyweight;
    this.menHeavyweightTkdownD = this.rankingsByTakedownDefense.menHeavyweight;
    this.menHeavyweightTkdowns = this.rankingsByTakedowns.menHeavyweight;
    this.menHeavyweightTkdownR = this.rankingsByTakedownRatio.menHeavyweight;

    this.rankingsService.getRankingsIspg$()
      .subscribe((items) => {
        items.forEach(item => {
          (item["Division"].includes("Women's")) ? this.womenArray.push(item) : this.menArray.push(item);
        });

        this.womenArray.forEach(element => {
          switch (element["Division"]) {

            case "Women's Strawweight Division":
              this.womenStrawweightIpsg.push(element);
              break;

            case "Women's Flyweight Division":
              this.womenFlyweightIpsg.push(element);
              break;

            case "Women's Bantamweight Division":
              this.womenBantamweightIpsg.push(element);
              break;

            case "Women's Featherweight Division":
              this.womenFeatherweightIpsg.push(element);
              break;

            default:
              this.defaultTab.push(element);
          }
        });

        this.menArray.forEach(element => {
          switch (element["Division"]) {

            case "Flyweight Division":
              this.menFlyweightIpsg.push(element);
              break;

            case "Bantamweight Division":
              this.menBantamweightIpsg.push(element);
              break;

            case "Featherweight Division":
              this.menFeatherweightIpsg.push(element);
              break;

            case "Lightweight Division":
              this.menLightweightIpsg.push(element);

              break;

            case "Welterweight Division":
              this.menWelterweightIpsg.push(element);
              break;

            case "Middleweight Division":
              this.menMiddleweightIpsg.push(element);
              break;

            case "Light Heavyweight Division":
              this.menLightHeavyweightIpsg.push(element);
              break;

            case "Heavyweight Division":
              this.menHeavyweightIpsg.push(element);
              break;

            default:
              this.defaultTab.push(element)
          }
        });

        this.womenStrawweightIpsg.forEach(ipsgItem => {

          this.womenStrawweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenStrawweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.womenFlyweightIpsg.forEach(ipsgItem => {

          this.womenFlyweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFlyweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.womenBantamweightIpsg.forEach(ipsgItem => {

          this.womenBantamweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenBantamweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.womenFeatherweightIpsg.forEach(ipsgItem => {

          this.womenFeatherweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.womenFeatherweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })


        this.menFlyweightIpsg.forEach(ipsgItem => {

          this.menFlyweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFlyweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menBantamweightIpsg.forEach(ipsgItem => {

          this.menBantamweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menBantamweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menMiddleweightIpsg.forEach(ipsgItem => {

          this.menMiddleweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menMiddleweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menWelterweightIpsg.forEach(ipsgItem => {

          this.menWelterweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menWelterweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menLightweightIpsg.forEach(ipsgItem => {

          this.menLightweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menFeatherweightIpsg.forEach(ipsgItem => {

          this.menFeatherweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menFeatherweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menLightHeavyweightIpsg.forEach(ipsgItem => {

          this.menLightHeavyweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menLightHeavyweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menHeavyweightIpsg.forEach(ipsgItem => {

          this.menHeavyweight.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightVictories.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightKoWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightStrikes.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightSRatio.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightSubWins.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightTkdownD.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightTkdowns.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg += item.Rank
            }
          })

          this.menHeavyweightTkdownR.forEach(item => {
            if (ipsgItem.Name === item.Name) {
              ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) / 9).toFixed(2))
            }
          })
        })

        this.menFlyweightIpsg = this.menFlyweightIpsg.sort(this.compareByIpsg);
        this.menBantamweightIpsg = this.menBantamweightIpsg.sort(this.compareByIpsg);
        this.menFeatherweightIpsg = this.menFeatherweightIpsg.sort(this.compareByIpsg);
        this.menLightweightIpsg = this.menLightweightIpsg.sort(this.compareByIpsg);
        this.menWelterweightIpsg = this.menWelterweightIpsg.sort(this.compareByIpsg);
        this.menMiddleweightIpsg = this.menMiddleweightIpsg.sort(this.compareByIpsg);
        this.menLightHeavyweightIpsg = this.menLightHeavyweightIpsg.sort(this.compareByIpsg);
        this.menHeavyweightIpsg = this.menHeavyweightIpsg.sort(this.compareByIpsg);

        this.womenStrawweightIpsg = this.womenStrawweightIpsg.sort(this.compareByIpsg);
        this.womenFlyweightIpsg = this.womenFlyweightIpsg.sort(this.compareByIpsg);
        this.womenBantamweightIpsg = this.womenBantamweightIpsg.sort(this.compareByIpsg);
        this.womenFeatherweightIpsg = this.womenFeatherweightIpsg.sort(this.compareByIpsg);


        this.addRank(this.menFlyweightIpsg);
        this.addRank(this.menBantamweightIpsg);
        this.addRank(this.menFeatherweightIpsg);
        this.addRank(this.menLightweightIpsg);
        this.addRank(this.menWelterweightIpsg);
        this.addRank(this.menMiddleweightIpsg);
        this.addRank(this.menLightHeavyweightIpsg);
        this.addRank(this.menHeavyweightIpsg);

        this.addRank(this.womenStrawweightIpsg);
        this.addRank(this.womenFlyweightIpsg);
        this.addRank(this.womenBantamweightIpsg);
        this.addRank(this.womenFeatherweightIpsg);

      })


    // console.log(this.menFlyweightIpsg);
    // console.log(this.menBantamweightIpsg);
    // console.log(this.menFeatherweightIpsg);
    // console.log(this.menLightweightIpsg);
    // console.log(this.menWelterweightIpsg)
    // console.log(this.menMiddleweightIpsg);
    // console.log(this.menLightHeavyweightIpsg);
    // console.log(this.menHeavyweightIpsg);

    // console.log(this.womenStrawweightIpsg);
    // console.log(this.womenFlyweightIpsg);
    // console.log(this.womenBantamweightIpsg);
    // console.log(this.womenFeatherweightIpsg);

    // console.log(this.defaultTab);
  }

  compareByIpsg = (a: FightersAndIpsgElement, b: FightersAndIpsgElement) => {
    return a.Ipsg - b.Ipsg;
  }

  addRank = (tab: FightersAndIpsgElement[]) => {
    for (let i = 0; i < tab.length; i++) {
      tab[i].Rank = i + 1;
    }
  }
}
