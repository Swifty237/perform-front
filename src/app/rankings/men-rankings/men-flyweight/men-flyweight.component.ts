import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-flyweight',
  templateUrl: './men-flyweight.component.html',
  styleUrls: ['./men-flyweight.component.scss']
})
export class MenFlyweightComponent implements AfterViewInit {

  @Input() menFlyweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menFlyweight);
    this.dataSource.paginator = this.paginator;
  }
}
