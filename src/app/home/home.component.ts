import { Component, OnInit } from '@angular/core';
import { UfcNewsService } from '../common/services/ufc-news/ufc-news.service';
import { map } from 'rxjs';
import { UfcNewsElement } from '../common/utils/ufc-news-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'PerformMMA';
  bigCardNews!: UfcNewsElement;
  smallCardNews: UfcNewsElement[] = [];
  simpleCardNews: UfcNewsElement[] = [];
  newsArray: UfcNewsElement[] = []; // Tableau pour stocker les données

  constructor(public ufcNewsService: UfcNewsService) { }

  ngOnInit(): void {
    this.ufcNewsService.getAllUfcNews$()
      .pipe(
        map((data) => {
          this.newsArray = data // Insérer chaque valeur dans le tableau
        })
      )
      .subscribe(
        () => {

          if (this.bigCardNews != undefined) {
            this.bigCardNews = this.newsArray[0];
            this.smallCardNews = this.newsArray.slice(1, 5);
            this.simpleCardNews = this.newsArray.slice(5);
          }
        }

        // (err: string) => console.error('An error occurred:', err)
      );
  }
}