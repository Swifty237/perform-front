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

  selectedRanking = "";

  selectLabels: SelectRankingLabel[] = [
    { value: 'fights', viewValue: '-- Number of fights --' },
    { value: 'wins', viewValue: '-- Winning percentage --' },
    { value: 'kowins', viewValue: '-- Winning percentage by knockout --' },
    { value: 'submissionwins', viewValue: '-- Winning percentage by submission --' },
    { value: 'strikes', viewValue: '-- Successful strikes percentage --' },
    { value: 'strikesratio', viewValue: '-- Given / taken hits ratio --' },
    { value: 'takedowns', viewValue: "-- Successful takedown percentage --" },
    { value: 'takedowndefense', viewValue: "-- Takedown defense percentage --" },
    { value: 'takedownsratio', viewValue: '-- Given / taken takedowns ratio --' },
    { value: 'ipsg', viewValue: '-- Performance index --' }
  ];
}
