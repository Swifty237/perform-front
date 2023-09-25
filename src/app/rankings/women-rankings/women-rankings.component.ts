import { Component, Input } from '@angular/core';
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
  FightersAndWinsElement,
  SelectRankingLabel
}
  from 'src/app/common/utils/rankings-elements';


@Component({
  selector: 'app-women-rankings',
  templateUrl: './women-rankings.component.html',
  styleUrls: ['./women-rankings.component.scss']
})
export class WomenRankingsComponent {

  @Input() womenStrawweight: FightersAndFightsElement[] = [];
  @Input() womenFlyweight: FightersAndFightsElement[] = [];
  @Input() womenBantamweight: FightersAndFightsElement[] = [];
  @Input() womenFeatherweight: FightersAndFightsElement[] = [];

  @Input() womenStrawweightVictories: FightersAndWinsElement[] = [];
  @Input() womenFlyweightVictories: FightersAndWinsElement[] = [];
  @Input() womenBantamweightVictories: FightersAndWinsElement[] = [];
  @Input() womenFeatherweightVictories: FightersAndWinsElement[] = [];

  @Input() womenStrawweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() womenFlyweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() womenBantamweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() womenFeatherweightKoWins: FightersAndKoWinsElement[] = [];

  @Input() womenStrawweightIpsg: FightersAndIpsgElement[] = [];
  @Input() womenFlyweightIpsg: FightersAndIpsgElement[] = [];
  @Input() womenBantamweightIpsg: FightersAndIpsgElement[] = [];
  @Input() womenFeatherweightIpsg: FightersAndIpsgElement[] = [];

  @Input() womenStrawweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() womenFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() womenBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() womenFeatherweightTkdownR: FightersAndTkdownRElement[] = [];

  @Input() womenStrawweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() womenFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() womenBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() womenFeatherweightTkdownD: FightersAndTkdownDElement[] = [];

  @Input() womenStrawweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() womenFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() womenBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() womenFeatherweightTkdowns: FightersAndTkdownsElement[] = [];

  @Input() womenStrawweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() womenFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() womenBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() womenFeatherweightSRatio: FightersAndStrkRatioElement[] = [];

  @Input() womenStrawweightStrikes: FightersAndStrikesElement[] = [];
  @Input() womenFlyweightStrikes: FightersAndStrikesElement[] = [];
  @Input() womenBantamweightStrikes: FightersAndStrikesElement[] = [];
  @Input() womenFeatherweightStrikes: FightersAndStrikesElement[] = [];

  @Input() womenStrawweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() womenFlyweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() womenBantamweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() womenFeatherweightSubWins: FightersAndSubWinsElement[] = [];


  selectedRanking = "";
  selectedRankingTransfer = "";


  selectLabels: SelectRankingLabel[] = [
    { value: 'fights', viewValue: '-- Nombre de combats --' },
    { value: 'wins', viewValue: '-- Pourcentage de victoires --' },
    { value: 'kowins', viewValue: '-- Pourcentage de victoires par KO --' },
    { value: 'submissionwins', viewValue: '-- Pourcentage de victoires par soumission --' },
    { value: 'strikes', viewValue: '-- Pourcentage de coups (strikes) reussis --' },
    { value: 'strikesratio', viewValue: '-- Ratio coups donnés / coups encaissés --' },
    { value: 'takedowns', viewValue: "-- Pourcentage d'amenées au sol (takedowns) reussi --" },
    { value: 'takedowndefense', viewValue: "-- Pourcentage de défenses d'amenées au sol (takedowns) --" },
    { value: 'takedownsratio', viewValue: '-- Ratio amenées au sol (takedowns) tentés / amenées au sol subits --' },
    { value: 'ipsg', viewValue: '-- Indice de performance statistique globale --' }
  ];

  getSelectedRanking() {
    this.selectedRankingTransfer = this.selectedRanking;
  }
}
