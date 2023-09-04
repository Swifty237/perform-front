import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-bantamweight',
  templateUrl: './men-bantamweight.component.html',
  styleUrls: ['./men-bantamweight.component.scss']
})
export class MenBantamweightComponent implements AfterViewInit {

  @Input() menBantamweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menBantamweight);
    this.dataSource.paginator = this.paginator;
  }
}
