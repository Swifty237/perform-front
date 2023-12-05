import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { UfcNewsElement } from '../../common/elements-types/ufc-news-element';
import { UfcNewsService } from '../../common/services/node-backend/ufc-news/ufc-news.service';

@Component({
  selector: 'app-espn',
  templateUrl: './espn.component.html',
  styleUrls: ['./espn.component.scss']
})
export class EspnComponent implements OnInit {

  newsArray: UfcNewsElement[] = []

  espn: UfcNewsElement[] = [];
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

              if (item.source.id == "espn") {
                this.espn.push(item);
              }

            })

            this.bigCard = this.espn[0];
            this.smallCard = this.espn.slice(1);
            this.dataSource = new MatTableDataSource<any>(this.smallCard);
            this.smallScreenDataSource = new MatTableDataSource<any>(this.espn);
            this.dataSource.paginator = this.paginator;
            this.smallScreenDataSource.paginator = this.smallScreenPaginator;

          }
        },

        error: (err: any) => console.error('An error occurred:', err)
      });
  }
}
