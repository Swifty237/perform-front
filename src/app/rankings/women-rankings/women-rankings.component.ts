import { Component, Input, ViewChild } from '@angular/core';
import { FigthersAndFightsElement, SelectRankingLabel } from 'src/app/common/utils/rankings-elements';


@Component({
  selector: 'app-women-rankings',
  templateUrl: './women-rankings.component.html',
  styleUrls: ['./women-rankings.component.scss']
})
export class WomenRankingsComponent {

  @Input() womenStrawweight: FigthersAndFightsElement[] = [];
  @Input() womenFlyweight: FigthersAndFightsElement[] = [];
  @Input() womenBantamweight: FigthersAndFightsElement[] = [];
  @Input() womenFeatherweight: FigthersAndFightsElement[] = [];

  selectLabels: SelectRankingLabel[] = [
    { value: '#', viewValue: '-- Nombre de combats --' },
    { value: '#', viewValue: '-- Nombre de victoires --' },
    { value: '#', viewValue: '-- Nombre de victoires par KO --' },
    { value: '#', viewValue: '-- Nombre de victoires par soumission --' },
    { value: '#', viewValue: '-- Nombre de défaites par KO --' },
    { value: '#', viewValue: '-- Nombre défaites par soumission --' },
    { value: '#', viewValue: '-- Nombre de strikes (coup de poings) en carrière --' },
    { value: '#', viewValue: '-- Nombre de strikes par combat --' },
    { value: '#', viewValue: '-- Nombre de clinchs (lutte debout) en carrière --' },
    { value: '#', viewValue: '-- Nombre de takedowns (amenés au sol) en carrière --' },
    { value: '#', viewValue: '-- Nombre takedowns par combat --' },
    { value: '#', viewValue: '-- Nombre takedowns défense en carrière --' },
    { value: '#', viewValue: '-- Nombre takedowns défense par combat --' }
  ];
}
