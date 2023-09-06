import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FightersAndFightsElement, FightersAndWinsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-women-featherweight',
  templateUrl: './women-featherweight.component.html',
  styleUrls: ['./women-featherweight.component.scss']
})
export class WomenFeatherweightComponent implements OnChanges {

  @Input() womenFeatherweight: FightersAndFightsElement[] = [];
  @Input() womenFeatherweightVictories: FightersAndWinsElement[] = [];
  @Input() selectedRanking = "";

  changingLabel = "--";
  changingColumn = "--";


  displayedColumns: string[] = ['name', '--'];
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
        this.displayedColumns = ['name', selection];
        this.changingLabel = "Combat(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.womenFeatherweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "victories":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Victoire(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.womenFeatherweightVictories);
        this.dataSource.paginator = this.paginator;
        break;

      case "ko-victories":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Victoire(s) / KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "submission-victories":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Victoire(s) / soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "ko-defeats":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Défaite(s) / KO";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "submission-defeats":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Défaite(s) / soumission";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "all-career-strikes":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Coups portés";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "fight-strikes":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Coups / combat";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "all-career-clinchs":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Clinch(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "all-career-takedowns":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Takedown(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "fight-takedowns":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Takedown(s) / combat";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "all-career-takedown-defends":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Défense(s) de takedown";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      case "fight-takedown-defends":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "D. takedown / Combats";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
        break;

      default:
        this.displayedColumns = ['name', '--'];
        this.changingLabel = "--";
        this.changingColumn = "--";
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>();
    }
  }
}
