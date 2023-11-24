import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { UfcNewsElement } from '../../common/elements-types/ufc-news-element';
import { UfcNewsService } from '../../common/services/node-backend/ufc-news/ufc-news.service';

@Component({
  selector: 'app-business-insider',
  templateUrl: './business-insider.component.html',
  styleUrls: ['./business-insider.component.scss']
})
export class BusinessInsiderComponent {

  newsArray: UfcNewsElement[] = []

  businessInsider: UfcNewsElement[] = [];
  bigCard: UfcNewsElement | undefined;
  smallCard: UfcNewsElement[] = [];

  displayedColumns: string[] = ['image', 'text'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

              if (item.source.id == "business-insider") {
                this.businessInsider.push(item);
              }

            })

            this.bigCard = this.businessInsider[0];
            this.smallCard = this.businessInsider.slice(1);
            this.dataSource = new MatTableDataSource<any>(this.smallCard);
            this.dataSource.paginator = this.paginator;

          }
        },

        error: (err: any) => console.error('An error occurred:', err)
      });
  }
}
