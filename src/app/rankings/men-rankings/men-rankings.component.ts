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

export class MenRankingsComponent {

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
    { value: 'ipsg', viewValue: '-- Fighter quality  index --' },
    { value: 'fights', viewValue: '-- Number of fights --' },
    { value: 'wins', viewValue: '-- Winning percentage --' },
    { value: 'kowins', viewValue: '-- Winning percentage by knockout --' },
    { value: 'submissionwins', viewValue: '-- Winning percentage by submission --' },
    { value: 'strikes', viewValue: '-- Successful strikes percentage --' },
    { value: 'strikesratio', viewValue: '-- Given / taken hits ratio --' },
    { value: 'takedowns', viewValue: "-- Successful takedown percentage --" },
    { value: 'takedowndefense', viewValue: "-- Takedown defense percentage --" },
    { value: 'takedownsratio', viewValue: '-- Given / taken takedowns ratio --' }
  ];
}
