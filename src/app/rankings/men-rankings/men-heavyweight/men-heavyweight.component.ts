import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FightersAndFightsElement, FightersAndWinsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-heavyweight',
  templateUrl: './men-heavyweight.component.html',
  styleUrls: ['./men-heavyweight.component.scss']
})
export class MenHeavyweightComponent implements OnChanges {

  @Input() menHeavyweight: FightersAndFightsElement[] = [];
  @Input() menHeavyweightVictories: FightersAndWinsElement[] = [];
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
        this.dataSource = new MatTableDataSource<FightersAndFightsElement>(this.menHeavyweight);
        this.dataSource.paginator = this.paginator;
        break;

      case "victories":
        this.displayedColumns = ["name", selection];
        this.changingLabel = "Victoire(s)";
        this.changingColumn = selection;
        this.dataSource = new MatTableDataSource<FightersAndWinsElement>(this.menHeavyweightVictories);
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
