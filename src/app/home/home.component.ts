import { Component, OnInit } from '@angular/core';
import { UfcNewsService } from '../common/services/ufc-news/ufc-news.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'PerformMMA';
  bigCardNews: any = {};
  smallCardNews: any[] = [];
  simpleCardNews: any[] = [];
  newsArray: any[] = []; // Tableau pour stocker les données

  constructor(public ufcNewsService: UfcNewsService) { }

  ngOnInit(): void {
    this.ufcNewsService.getAllUfcNews$()
      .pipe(
        map((data) => {
          this.newsArray.push(data); // Insérer chaque valeur dans le tableau
        })
      )
      .subscribe(
        () => {

          this.bigCardNews = this.newsArray[0][0];
          this.smallCardNews = this.newsArray[0].slice(1, 5);
          this.simpleCardNews = this.newsArray[0].slice(5);
        }

        // (err: string) => console.error('An error occurred:', err)
      );
  }
}