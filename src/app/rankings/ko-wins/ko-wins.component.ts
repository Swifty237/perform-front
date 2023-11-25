import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { FightersAndKoWinsElement, SelectedLabelElement } from 'src/app/common/elements-types/ranking-element';
import { RankingService } from 'src/app/common/services/node-backend/ranking/ranking.service';

@Component({
  selector: 'app-ko-wins',
  templateUrl: './ko-wins.component.html',
  styleUrls: ['./ko-wins.component.scss']
})
export class KoWinsComponent {

  @Input() selectedDivision!: string;

  menSelectLabels: SelectedLabelElement[] = [
    { value: 'men-bantam', viewValue: 'Bantamweight' },
    { value: 'men-feather', viewValue: 'Featherweight' },
    { value: 'men-fly', viewValue: 'Flyweight' },
    { value: 'men-heavy', viewValue: 'Heavyweight' },
    { value: 'men-lightheavy', viewValue: 'Light Heavyweight' },
    { value: 'men-light', viewValue: 'Lightweight' },
    { value: 'men-middle', viewValue: 'Middleweight' },
    { value: 'men-welter', viewValue: 'Welterweight' }
  ];

  womenSelectLabels: SelectedLabelElement[] = [
    { value: 'women-bantam', viewValue: 'Women\'s Bantamweight' },
    { value: 'women-feather', viewValue: 'Women\'s Featherweight' },
    { value: 'women-fly', viewValue: 'Women\'s Flyweight' },
    { value: 'women-straw', viewValue: 'Women\'s Strawweight' }
  ];

  menFights: FightersAndKoWinsElement[] = [];
  womenFights: FightersAndKoWinsElement[] = [];

  displayedColumns: string[] = ['rank', 'name', 'stat'];
  dataSource = new MatTableDataSource<FightersAndKoWinsElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _rankingService: RankingService) {
    this.getElements(this.selectedDivision);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDivision']) {
      this.getElements(this.selectedDivision);
    }
  }


  getElements(selection: string) {

    this.menFights = []
    this.womenFights = []

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsKoWins$()
          .pipe(
            map(items => {
              items.forEach(item => {

                if (item["Division"] == elt.viewValue + " Division") {
                  this.menFights.push(item);
                }

              })
            })
          )
          .subscribe(
            () => {

              for (let i = 0; i < this.menFights.length; i++) {
                let element = this.menFights[i];
                element["Rank"] = i + 1;
              }

              console.log(this.menFights);


              this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.menFights);
              this.dataSource.paginator = this.paginator;
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsKoWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenFights.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenFights.length; i++) {
                let element = this.womenFights[i];
                element["Rank"] = i + 1;
              }

              console.log(this.womenFights);


              this.dataSource = new MatTableDataSource<FightersAndKoWinsElement>(this.womenFights);
              this.dataSource.paginator = this.paginator;
            })
      }
    })
  }
}