import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FigthersAndFightsElement } from 'src/app/common/utils/rankings-elements';

@Component({
  selector: 'app-men-lightheavyweight',
  templateUrl: './men-lightheavyweight.component.html',
  styleUrls: ['./men-lightheavyweight.component.scss']
})
export class MenLightheavyweightComponent implements AfterViewInit {

  @Input() menLightHeavyweight: FigthersAndFightsElement[] = [];

  displayedColumns: string[] = ['name', 'numberFights'];
  dataSource = new MatTableDataSource<FigthersAndFightsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FigthersAndFightsElement>(this.menLightHeavyweight);
    this.dataSource.paginator = this.paginator;
  }
}
