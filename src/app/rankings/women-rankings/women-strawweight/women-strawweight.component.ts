import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-women-strawweight',
  templateUrl: './women-strawweight.component.html',
  styleUrls: ['./women-strawweight.component.scss']
})
export class WomenStrawweightComponent implements AfterViewInit {

  @Input() womenStrawweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.womenStrawweight);
    this.dataSource.paginator = this.paginator;
  }
}
