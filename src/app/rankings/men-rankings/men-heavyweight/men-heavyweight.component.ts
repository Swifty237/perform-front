import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenHeavyweight } from 'src/app/common/data/men/men-heavyweight';
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
  selector: 'app-men-heavyweight',
  templateUrl: './men-heavyweight.component.html',
  styleUrls: ['./men-heavyweight.component.scss']
})

export class MenHeavyweightComponent implements OnChanges, OnInit {

  @Input() menHeavyweight!: MenHeavyweight;

  @Input() selectedRanking = "";

  changingLabel = "--";
  changingColumn = "--";


  displayedColumns: string[] = ['rank', 'name', '--'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.getDataSource(this.selectedRanking);
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.getDataSource(this.selectedRanking);
  }

  getDataSource(selection: string) {

    switch (selection) {

      case "fights":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Combats";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menHeavyweight.rankingByNumberFightsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Victoires"
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menHeavyweight.rankingByVictoriesArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.menHeavyweight.rankingByKowinsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% V. Soumissions";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndSubWinsElement>(this.menHeavyweight.rankingBySubmissionsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% Coups réussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrikesElement>(this.menHeavyweight.rankingByStrikesArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio coups donnés/reçus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrkRatioElement>(this.menHeavyweight.rankingByStrikesRatioArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol reussis";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownsElement>(this.menHeavyweight.rankingByTakedownsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "% A. sol défendus";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownDElement>(this.menHeavyweight.rankingByTakedownDefenseArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Ratio A. sol effectués/subit";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownRElement>(this.menHeavyweight.rankingByTakedownRatioArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "ipsg":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "IPSG";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.menHeavyweight.rankingByIpsgArray);
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
