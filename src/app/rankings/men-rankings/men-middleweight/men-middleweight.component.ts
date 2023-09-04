import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-middleweight',
  templateUrl: './men-middleweight.component.html',
  styleUrls: ['./men-middleweight.component.scss']
})
export class MenMiddleweightComponent implements AfterViewInit {

  @Input() menMiddleweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menMiddleweight);
    this.dataSource.paginator = this.paginator;
  }
}
