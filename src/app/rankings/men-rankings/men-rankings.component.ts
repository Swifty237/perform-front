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
} from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-rankings',
  templateUrl: './men-rankings.component.html',
  styleUrls: ['./men-rankings.component.scss'],
})
export class MenRankingsComponent {

  @Input() menFlyweight: FightersAndFightsElement[] = [];
  @Input() menBantamweight: FightersAndFightsElement[] = [];
  @Input() menFeatherweight: FightersAndFightsElement[] = [];
  @Input() menLightweight: FightersAndFightsElement[] = [];
  @Input() menWelterweight: FightersAndFightsElement[] = [];
  @Input() menMiddleweight: FightersAndFightsElement[] = [];
  @Input() menLightHeavyweight: FightersAndFightsElement[] = [];
  @Input() menHeavyweight: FightersAndFightsElement[] = [];

  @Input() menFlyweightVictories: FightersAndWinsElement[] = [];
  @Input() menBantamweightVictories: FightersAndWinsElement[] = [];
  @Input() menFeatherweightVictories: FightersAndWinsElement[] = [];
  @Input() menLightweightVictories: FightersAndWinsElement[] = [];
  @Input() menWelterweightVictories: FightersAndWinsElement[] = [];
  @Input() menMiddleweightVictories: FightersAndWinsElement[] = [];
  @Input() menLightHeavyweightVictories: FightersAndWinsElement[] = [];
  @Input() menHeavyweightVictories: FightersAndWinsElement[] = [];

  @Input() menFlyweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menBantamweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menLightweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menWelterweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menMiddleweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menLightHeavyweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menHeavyweightKoWins: FightersAndKoWinsElement[] = [];

  @Input() menFlyweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menBantamweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menFeatherweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menLightweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menWelterweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menMiddleweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menLightHeavyweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menHeavyweightIpsg: FightersAndIpsgElement[] = [];

  @Input() menFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menBantamweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menFeatherweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menLightweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menWelterweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menMiddleweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menLightHeavyweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menHeavyweightTkdownR: FightersAndTkdownRElement[] = [];

  @Input() menFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menBantamweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menLightweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menWelterweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menMiddleweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menLightHeavyweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menHeavyweightTkdownD: FightersAndTkdownDElement[] = [];

  @Input() menFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menBantamweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menLightweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menWelterweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menMiddleweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menLightHeavyweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menHeavyweightTkdowns: FightersAndTkdownsElement[] = [];

  @Input() menFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menBantamweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menLightweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menWelterweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menMiddleweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menLightHeavyweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menHeavyweightSRatio: FightersAndStrkRatioElement[] = [];

  @Input() menFlyweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menBantamweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menFeatherweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menLightweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menWelterweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menMiddleweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menLightHeavyweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menHeavyweightStrikes: FightersAndStrikesElement[] = [];

  @Input() menFlyweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menBantamweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menFeatherweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menLightweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menWelterweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menMiddleweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menLightHeavyweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menHeavyweightSubWins: FightersAndSubWinsElement[] = [];

  @Input() selectedRanking = "";
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
