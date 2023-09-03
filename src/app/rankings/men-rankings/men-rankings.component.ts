import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RankingsByFigthsService } from 'src/app/common/services/rankings/rankings-by-figths.service';
import { FigthersAndFightsElement, SelectRankingLabel } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-rankings',
  templateUrl: './men-rankings.component.html',
  styleUrls: ['./men-rankings.component.scss'],
})
export class MenRankingsComponent {

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

  // displayedColumns: string[] = ['division', 'name', 'numberFights'];
  // dataSource: MatTableDataSource<FigthersAndFightsElement> = new MatTableDataSource<FigthersAndFightsElement>(this.menFlyweight);

  constructor(public rankingsByfights: RankingsByFigthsService) { }
}
