import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WomenFlyweight } from 'src/app/common/data/women/women-flyweight';
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
  selector: 'app-women-flyweight',
  templateUrl: './women-flyweight.component.html',
  styleUrls: ['./women-flyweight.component.scss']
})
export class WomenFlyweightComponent implements OnChanges {

  @Input() womenFlyweight!: WomenFlyweight;

  @Input() selectedRanking = "";

  changingLabel = "--";
  changingColumn = "--";


  displayedColumns: string[] = ['rank', 'name', '--'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(): void {
    this.getDataSource(this.selectedRanking);
  }

  getDataSource(selection: string) {

    switch (selection) {

      case "fights":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Fights";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.womenFlyweight.rankingByNumberFightsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "wins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "win";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.womenFlyweight.rankingByVictoriesArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "kowins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Knockout";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.womenFlyweight.rankingByKowinsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "submissionwins":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Submission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndSubWinsElement>(this.womenFlyweight.rankingBySubmissionsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikes":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strike";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrikesElement>(this.womenFlyweight.rankingByStrikesArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "strikesratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Strikes ratio";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndStrkRatioElement>(this.womenFlyweight.rankingByStrikesRatioArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowns":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Takedown";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownsElement>(this.womenFlyweight.rankingByTakedownsArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedowndefense":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Takedown defense";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownDElement>(this.womenFlyweight.rankingByTakedownDefenseArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "takedownsratio":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Takedowns ratio";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndTkdownRElement>(this.womenFlyweight.rankingByTakedownRatioArray);
        this.dataSource.paginator = this.paginator;
        break;

      case "ipsg":
        this.displayedColumns = ["rank", "name", selection];
        this.changingLabel = "Performance index";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndIpsgElement>(this.womenFlyweight.rankingByIpsgArray);
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
