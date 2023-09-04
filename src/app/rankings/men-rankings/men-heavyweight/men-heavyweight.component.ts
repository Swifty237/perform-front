import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-heavyweight',
  templateUrl: './men-heavyweight.component.html',
  styleUrls: ['./men-heavyweight.component.scss']
})
export class MenHeavyweightComponent implements AfterViewInit {

  @Input() menHeavyweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menHeavyweight);
    this.dataSource.paginator = this.paginator;
  }
}
