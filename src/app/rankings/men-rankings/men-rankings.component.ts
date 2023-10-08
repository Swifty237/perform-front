import { Component, Input, OnInit } from '@angular/core';
import { MenBantamweight } from 'src/app/common/data/men/men-bantamweight';
import { MenFeatherweight } from 'src/app/common/data/men/men-featherweight';
import { MenFlyweight } from 'src/app/common/data/men/men-flyweight';
import { MenHeavyweight } from 'src/app/common/data/men/men-heavyweight';
import { MenLightHeavyweight } from 'src/app/common/data/men/men-lightheavyweight';
import { MenLightweight } from 'src/app/common/data/men/men-lightweight';
import { MenMiddleweight } from 'src/app/common/data/men/men-middleweight';
import { MenWelterweight } from 'src/app/common/data/men/men-welterweight';
import { SelectRankingLabel } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-rankings',
  templateUrl: './men-rankings.component.html',
  styleUrls: ['./men-rankings.component.scss'],
})

export class MenRankingsComponent implements OnInit {

  @Input() menFlyweight!: MenFlyweight;
  @Input() menBantamweight!: MenBantamweight;
  @Input() menFeatherweight!: MenFeatherweight;
  @Input() menLightweight!: MenLightweight;
  @Input() menWelterweight!: MenWelterweight;
  @Input() menMiddleweight!: MenMiddleweight;
  @Input() menLightHeavyweight!: MenLightHeavyweight;
  @Input() menHeavyweight!: MenHeavyweight;

  selectedRanking = "";

  selectLabels: SelectRankingLabel[] = [
    { value: 'fights', viewValue: '-- Nombre de combats --' },
    { value: 'wins', viewValue: '-- Pourcentage de victoires --' },
    { value: 'kowins', viewValue: '-- Pourcentage de victoires par KO --' },
    { value: 'submissionwins', viewValue: '-- Pourcentage de victoires par soumission --' },
    { value: 'strikes', viewValue: '-- Pourcentage de coups (strikes) reussis --' },
    { value: 'strikesratio', viewValue: '-- Ratio coups donnés / coups encaissés --' },
    { value: 'takedowns', viewValue: "-- Pourcentage d'amenées au sol (takedowns) reussi --" },
    { value: 'takedowndefense', viewValue: "-- Pourcentage de défenses d'amenées au sol (takedowns) --" },
    { value: 'takedownsratio', viewValue: '-- Ratio amenées au sol (takedowns) tentés / amenées au sol subies --' },
    { value: 'ipsg', viewValue: '-- Indice de performance statistique globale --' }
  ];

  ngOnInit(): void {
    this.selectedRanking = "ipsg";
  }
}
