import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  FightersAndWinsElement
} from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-welterweight',
  templateUrl: './men-welterweight.component.html',
  styleUrls: ['./men-welterweight.component.scss']
})
export class MenWelterweightComponent implements OnChanges {

  @Input() menWelterweight: FightersAndFightsElement[] = [];
  @Input() menWelterweightVictories: FightersAndWinsElement[] = [];
  @Input() menWelterweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menWelterweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menWelterweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menWelterweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menWelterweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menWelterweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menWelterweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menWelterweightSubWins: FightersAndSubWinsElement[] = [];

  @Input() selectedRanking = "";

  changingLabel = "--";
  changingColumn = "--";


  displayedColumns: string[] = ['rank', 'name', '--'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedRanking'] && !changes['selectedRanking'].firstChange) {
      const newSelection = changes['selectedRanking'].currentValue;
      this.getDataSource(newSelection);
    }
  }


  getDataSource(selection: string) {

    switch (selection) {

      case "fights":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Combat(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menWelterweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoire(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menWelterweightVictories);
        this.dataSource.paginator = this.paginator;
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoires/KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.menWelterweightKoWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoire(s)/soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndSubWinsElement>(this.menWelterweightSubWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Défaite(s)/KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrikesElement>(this.menWelterweightStrikes);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = " % Défaite(s)/soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrkRatioElement>(this.menWelterweightSRatio);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strikes";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownsElement>(this.menWelterweightTkdowns);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strikes/combat";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownDElement>(this.menWelterweightTkdownD);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio Takedowns";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownRElement>(this.menWelterweightTkdownR);
        this.dataSource.paginator = this.paginator;
        break;

      default:
        this.displayedColumns = ['rank', 'name', '--'];
        this.changingLabel = "--";
        this.changingColumn = "--";
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        this.dataSource.paginator = this.paginator;
    }
  }
}