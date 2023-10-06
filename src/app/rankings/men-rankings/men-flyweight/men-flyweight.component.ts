import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FightersAndFightsElement, FightersAndIpsgElement, FightersAndKoWinsElement, FightersAndStrikesElement, FightersAndStrkRatioElement, FightersAndSubWinsElement, FightersAndTkdownDElement, FightersAndTkdownRElement, FightersAndTkdownsElement, FightersAndWinsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-flyweight',
  templateUrl: './men-flyweight.component.html',
  styleUrls: ['./men-flyweight.component.scss']
})
export class MenFlyweightComponent implements OnChanges, OnInit {

  @Input() menFlyweight: FightersAndFightsElement[] = [];
  @Input() menFlyweightVictories: FightersAndWinsElement[] = [];
  @Input() menFlyweightKoWins: FightersAndKoWinsElement[] = [];
  @Input() menFlyweightIpsg: FightersAndIpsgElement[] = [];
  @Input() menFlyweightTkdownR: FightersAndTkdownRElement[] = [];
  @Input() menFlyweightTkdownD: FightersAndTkdownDElement[] = [];
  @Input() menFlyweightTkdowns: FightersAndTkdownsElement[] = [];
  @Input() menFlyweightSRatio: FightersAndStrkRatioElement[] = [];
  @Input() menFlyweightSubWins: FightersAndSubWinsElement[] = [];
  @Input() menFlyweightStrikes: FightersAndStrikesElement[] = [];


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
    this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.menFlyweightIpsg);
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
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menFlyweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoires";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menFlyweightVictories);
        this.dataSource.paginator = this.paginator;
        // console.log("men flyweight victories : " + this.menFlyweightVictories);
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.menFlyweightKoWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. Soumissions";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndSubWinsElement>(this.menFlyweightSubWins);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Coups réussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrikesElement>(this.menFlyweightStrikes);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio coups donnés/reçus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrkRatioElement>(this.menFlyweightSRatio);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol reussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownsElement>(this.menFlyweightTkdowns);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol défendus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownDElement>(this.menFlyweightTkdownD);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio A. sol effectués/subit";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownRElement>(this.menFlyweightTkdownR);
        this.dataSource.paginator = this.paginator;
        break;

      case "ipsg":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "IPSG";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.menFlyweightIpsg);
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
