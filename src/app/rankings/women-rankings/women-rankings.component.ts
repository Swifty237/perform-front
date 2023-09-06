import { Component, Input } from '@angular/core';
import { FightersAndFightsElement, FightersAndWinsElement, SelectRankingLabel } from 'src/app/common/utils/rankings-elements';


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

  selectedRanking = "";

  selectLabels: SelectRankingLabel[] = [
    { value: 'fights', viewValue: '-- Nombre de combats --' },
    { value: 'victories', viewValue: '-- Nombre de victoires --' },
    { value: 'ko-victories', viewValue: '-- Nombre de victoires par KO --' },
    { value: 'submission-victories', viewValue: '-- Nombre de victoires par soumission --' },
    { value: 'ko-defeats', viewValue: '-- Nombre de défaites par KO --' },
    { value: 'submission-defeats', viewValue: '-- Nombre défaites par soumission --' },
    { value: 'all-career-strikes', viewValue: '-- Nombre de strikes (coup de poings) en carrière --' },
    { value: 'fight-strikes', viewValue: '-- Nombre de strikes par combat --' },
    { value: 'all-career-clinchs', viewValue: '-- Nombre de clinchs (lutte debout) en carrière --' },
    { value: 'all-career-takedowns', viewValue: '-- Nombre de takedowns (amenés au sol) en carrière --' },
    { value: 'fight-takedowns', viewValue: '-- Nombre takedowns par combat --' },
    { value: 'all-career-takedown-defends', viewValue: '-- Nombre takedowns défense en carrière --' },
    { value: 'fight-takedown-defends', viewValue: '-- Nombre takedowns défense par combat --' }
  ];
}
