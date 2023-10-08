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
  title = 'Perform MMA';
  bigCardNews: UfcNewsElement | undefined;
  smallCardNews: UfcNewsElement[] = [];
  simpleCardNews: UfcNewsElement[] = [];
  newsArray: UfcNewsElement[] = []; // Tableau pour stocker les données

  constructor(private ufcNewsService: UfcNewsService) { }

  ngOnInit(): void {
    this.ufcNewsService.getAllUfcNews$()
      .pipe(
        map((data) => {
          this.newsArray = data; // Insérer chaque valeur dans le tableau
        })
      )
      .subscribe({
        next: () => {

          if (this.newsArray != undefined) {
            this.bigCardNews = this.newsArray[0];
            this.smallCardNews = this.newsArray.slice(1, 5);
            this.simpleCardNews = this.newsArray.slice(5);
          }
        },

        error: err => console.error('An error occurred:', err)
      });
  }
}

function next(value: void): void {
  throw new Error('Function not implemented.');
}
