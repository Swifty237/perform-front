import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-women-featherweight',
  templateUrl: './women-featherweight.component.html',
  styleUrls: ['./women-featherweight.component.scss']
})
export class WomenFeatherweightComponent implements AfterViewInit {

  @Input() womenFeatherweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.womenFeatherweight);
    this.dataSource.paginator = this.paginator;
  }
}
