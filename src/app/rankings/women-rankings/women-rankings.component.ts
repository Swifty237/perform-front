import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RankingsByFigthsService } from 'src/app/common/services/rankings/rankings-by-figths.service';
import { FigthersAndFightsElement, SelectRankingLabel } from 'src/app/common/utils/rankings-elements';

type PeriodicElement = {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-women-rankings',
  templateUrl: './women-rankings.component.html',
  styleUrls: ['./women-rankings.component.scss']
})
export class WomenRankingsComponent {

  // @Input() womenStrawweight: FigthersAndFightsElement[] = [];
  // @Input() womenFlyweight: FigthersAndFightsElement[] = [];
  // @Input() womenBantamweight: FigthersAndFightsElement[] = [];
  // @Input() womenFeatherweight: FigthersAndFightsElement[] = [];

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

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['division', 'name', 'numberFights'];
  // dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.womenStrawweight);

  constructor(public rankingsByFigths: RankingsByFigthsService) { }

}
