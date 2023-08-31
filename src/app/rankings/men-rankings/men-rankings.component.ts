import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement, SelectRankingLabel } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-rankings',
  templateUrl: './men-rankings.component.html',
  styleUrls: ['./men-rankings.component.scss'],
})
export class MenRankingsComponent {

  @Input() menFlyweight: FigthersAndFightsElement[] = [];
  @Input() menBantamweight: FigthersAndFightsElement[] = [];
  @Input() menFeatherweight: FigthersAndFightsElement[] = [];
  @Input() menLightweight: FigthersAndFightsElement[] = [];
  @Input() menWelterweight: FigthersAndFightsElement[] = [];
  @Input() menMiddleweight: FigthersAndFightsElement[] = [];
  @Input() menLightHeavyweight: FigthersAndFightsElement[] = [];
  @Input() menHeavyweight: FigthersAndFightsElement[] = [];

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

  displayedColumns: string[] = ['division', 'name', 'numberFights'];
  dataSource: any;

  constructor() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menFlyweight);
    // console.log(this.dataSource)
  }
}
