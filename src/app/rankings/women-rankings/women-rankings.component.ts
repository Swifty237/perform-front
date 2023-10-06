import { Component, Input } from '@angular/core';
import { WomenBantamweight } from 'src/app/common/data/women/women-bantamweight';
import { WomenFeatherweight } from 'src/app/common/data/women/women-featherweight';
import { WomenFlyweight } from 'src/app/common/data/women/women-flyweight';
import { WomenStrawweight } from 'src/app/common/data/women/women-strawweight';
import { SelectRankingLabel } from 'src/app/common/utils/rankings-elements';


@Component({
  selector: 'app-women-rankings',
  templateUrl: './women-rankings.component.html',
  styleUrls: ['./women-rankings.component.scss']
})
export class WomenRankingsComponent {

  @Input() womenStrawweight!: WomenStrawweight;
  @Input() womenFlyweight!: WomenFlyweight;
  @Input() womenBantamweight!: WomenBantamweight;
  @Input() womenFeatherweight!: WomenFeatherweight;

  selectedRanking = "ipsg";
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
