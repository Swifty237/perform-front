import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  selector: 'app-men-featherweight',
  templateUrl: './men-featherweight.component.html',
  styleUrls: ['./men-featherweight.component.scss']
})
export class MenFeatherweightComponent implements OnChanges, OnInit {

  @Input() menFeatherweight: FightersAndFightsElement[] = [];
  @Input() menFeatherweightVictories: FightersAndWinsElement[] = [];
  @Input() menFeatherweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menFeatherweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menFeatherweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menFeatherweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menFeatherweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menFeatherweightStrikes: FightersAndStrikesElement[] = [];
  @Input() menFeatherweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menFeatherweightTkdownR: FightersAndTkdownRElement[] = [];

  @Input() selectedRanking = "";

  changingLabel = "--";
  changingColumn = "--";


  displayedColumns: string[] = ['rank', 'name', '--'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.displayedColumns = ["rank", "name", "ipsg"];
    this.changingLabel = "IPSG";
    this.changingColumn = "ipsg";
    this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.menFeatherweightIpsg);
    this.dataSource.paginator = this.paginator;
  }

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
        this.changingLabel = "Combats";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menFeatherweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoires";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menFeatherweightVictories);
        this.dataSource.paginator = this.paginator;
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.menFeatherweightKoWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. Soumissions";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndSubWinsElement>(this.menFeatherweightSubWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Coups réussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrikesElement>(this.menFeatherweightStrikes);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio coups donnés/reçus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrkRatioElement>(this.menFeatherweightSRatio);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol reussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownsElement>(this.menFeatherweightTkdowns);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol défendus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownDElement>(this.menFeatherweightTkdownD);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio A. sol effectués/subit";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownRElement>(this.menFeatherweightTkdownR);
        this.dataSource.paginator = this.paginator;
        break;

      case "ipsg":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "IPSG";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.menFeatherweightIpsg);
        this.dataSource.paginator = this.paginator;
        break;

      default:
        this.displayedColumns = ["rank", "name", "--"];
        this.changingLabel = "--";
        this.changingColumn = "--";
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        this.dataSource.paginator = this.paginator;
    }
  }
}
