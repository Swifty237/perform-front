import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-featherweight',
  templateUrl: './men-featherweight.component.html',
  styleUrls: ['./men-featherweight.component.scss']
})
export class MenFeatherweightComponent implements AfterViewInit {

  @Input() menFeatherweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menFeatherweight);
    this.dataSource.paginator = this.paginator;
  }
}
