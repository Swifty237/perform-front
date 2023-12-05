import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { UfcNewsElement } from '../../common/elements-types/ufc-news-element';
import { UfcNewsService } from '../../common/services/node-backend/ufc-news/ufc-news.service';

@Component({
  selector: 'app-bleacher-report',
  templateUrl: './bleacher-report.component.html',
  styleUrls: ['./bleacher-report.component.scss']
})
export class BleacherReportComponent {

  newsArray: UfcNewsElement[] = []

  bleacherReport: UfcNewsElement[] = [];
  bigCard: UfcNewsElement | undefined;
  smallCard: UfcNewsElement[] = [];

  displayedColumns: string[] = ['image', 'text'];
  dataSource = new MatTableDataSource<any>();
  smallScreenDataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) smallScreenPaginator!: MatPaginator;

  constructor(private ufcNewsService: UfcNewsService) { }

  ngOnInit(): void {

    this.ufcNewsService.getAllUfcNews$()
      .pipe(
        map((data: UfcNewsElement[]) => {
          this.newsArray = data; // Insérer chaque valeur dans le tableau
        })
      )
      .subscribe({
        next: () => {

          if (this.newsArray != undefined) {

            this.newsArray.forEach(item => {

              if (item.source.id == "bleacher-report") {
                this.bleacherReport.push(item);
              }

            })

            this.bigCard = this.bleacherReport[0];
            this.smallCard = this.bleacherReport.slice(1);
            this.dataSource = new MatTableDataSource<any>(this.smallCard);
            this.smallScreenDataSource = new MatTableDataSource<any>(this.bleacherReport);
            this.dataSource.paginator = this.paginator;
            this.smallScreenDataSource.paginator = this.smallScreenPaginator;

          }
        },

        error: (err: any) => console.error('An error occurred:', err)
      });
  }
}
