import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-women-flyweight',
  templateUrl: './women-flyweight.component.html',
  styleUrls: ['./women-flyweight.component.scss']
})
export class WomenFlyweightComponent implements AfterViewInit {

  @Input() womenFlyweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.womenFlyweight);
    this.dataSource.paginator = this.paginator;
  }
}
