import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FightersAndFightsElement, FightersAndIpsgElement, FightersAndKoWinsElement, FightersAndStrikesElement, FightersAndStrkRatioElement, FightersAndSubWinsElement, FightersAndTkdownDElement, FightersAndTkdownRElement, FightersAndTkdownsElement, FightersAndWinsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-lightweight',
  templateUrl: './men-lightweight.component.html',
  styleUrls: ['./men-lightweight.component.scss']
})
export class MenLightweightComponent implements OnChanges {

  @Input() menLightweight: FightersAndFightsElement[] = [];
  @Input() menLightweightVictories: FightersAndWinsElement[] = [];
  @Input() menLightweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menLightweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menLightweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menLightweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menLightweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menLightweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menLightweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menLightweightSubWins: FightersAndSubWinsElement[] = [];

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
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menLightweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoire(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menLightweightVictories);
        this.dataSource.paginator = this.paginator;
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoires / KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoire(s) / soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Défaite(s) / KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = " % Défaite(s) / soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strikes";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strikes / combat";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Clinch(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      default:
        this.displayedColumns = ['rank', 'name', '--'];
        this.changingLabel = "--";
        this.changingColumn = "--";
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
    }
  }
}
