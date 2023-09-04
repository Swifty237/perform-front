import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-women-bantamweight',
  templateUrl: './women-bantamweight.component.html',
  styleUrls: ['./women-bantamweight.component.scss']
})
export class WomenBantamweightComponent {

  @Input() womenBantamweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.womenBantamweight);
    this.dataSource.paginator = this.paginator;
  }
}
