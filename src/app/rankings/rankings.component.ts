import { Component, OnInit } from '@angular/core';
import { RankingsService } from '../common/services/rankings.service';
import { FigthersAndFightsElement } from '../common/utils/rankings-elements';
import { map, tap, toArray } from 'rxjs/operators';



@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})
export class RankingsComponent implements OnInit {

  fightersArray: FigthersAndFightsElement[] = [];

  menArray: FigthersAndFightsElement[] = [];
  womenArray: FigthersAndFightsElement[] = [];

  menFlyweight: FigthersAndFightsElement[] = [];
  menBantamweight: FigthersAndFightsElement[] = [];
  menFeatherweight: FigthersAndFightsElement[] = [];
  menLightweight: FigthersAndFightsElement[] = [];
  menWelterweight: FigthersAndFightsElement[] = [];
  menMiddleweight: FigthersAndFightsElement[] = [];
  menLightHeavyweight: FigthersAndFightsElement[] = [];
  menHeavyweight: FigthersAndFightsElement[] = [];

  womenStrawweight: FigthersAndFightsElement[] = [];
  womenFlyweight: FigthersAndFightsElement[] = [];
  womenBantamweight: FigthersAndFightsElement[] = [];
  womenFeatherweight: FigthersAndFightsElement[] = [];

  womenDefaultTab: FigthersAndFightsElement[] = [];
  menDefaultTab: FigthersAndFightsElement[] = [];


  constructor(public rankingsService: RankingsService) {

    this.rankingsService.getRankingsNumberFights$()
      .pipe(
        map(item => this.fightersArray.push(item))
      )
      .subscribe({
        next: () => {
          // console.log(this.fightersArray)

          this.fightersArray.forEach(element => {

            if (element["Division"]?.includes("Women's")) {
              this.womenArray.push(element);
            } else {
              this.menArray.push(element);
            }
          })

          console.log(this.menArray);
          console.log(this.womenArray);
        },

        error: err => console.error('An error occurred:', err)
      });

    // console.log(this.fightersArray);

    // console.log(this.menArray);
    // console.log(this.womenArray);


    // for (let i = 0; i < this.womenArray.length; i++) {
    //   let element = this.womenArray[i];

    //   switch (element["Division"]) {

    //     case "Women's Strawweight Division":
    //       this.womenStrawweight.push(element);
    //       break;

    //     case "Women's Flyweight Division":
    //       this.womenFlyweight.push(element);
    //       break;

    //     case "Women's Bantamweight Division":
    //       this.womenBantamweight.push(element);
    //       break;

    //     case "Women's Featherweight Division":
    //       this.womenFeatherweight.push(element);
    //       break;

    //     default:
    //       this.womenDefaultTab.push(element);
    //   }
    // }

    // for (let i = 0; i < this.menArray.length; i++) {
    //   let element = this.menArray[i];

    //   switch (element["Division"]) {

    //     case "Flyweight Division":
    //       this.menFlyweight.push(element);
    //       break;

    //     case "Bantamweight Division":
    //       this.menBantamweight.push(element);
    //       break;

    //     case "Featherweight Division":
    //       this.menFeatherweight.push(element);
    //       break;

    //     case "Lightweight Division":
    //       this.menLightweight.push(element);

    //       break;

    //     case "Welterweight Division":
    //       this.menWelterweight.push(element);
    //       break;

    //     case "Middleweight Division":
    //       this.menMiddleweight.push(element);
    //       break;

    //     case "Light Heavyweight Division":
    //       this.menLightHeavyweight.push(element);
    //       break;

    //     case "Heavyweight Division":
    //       this.menHeavyweight.push(element);
    //       break;

    //     default:
    //       this.menDefaultTab.push(element)
    //   }
    // }

    if (this.fightersArray.length > 0) {
      console.log(this.menFlyweight);
      console.log(this.menBantamweight);
      console.log(this.menFeatherweight);
      console.log(this.menLightweight);
      console.log(this.menWelterweight);
      console.log(this.menMiddleweight);
      console.log(this.menLightHeavyweight);
      console.log(this.menHeavyweight);

      console.log(this.womenStrawweight);
      console.log(this.womenFlyweight);
      console.log(this.womenBantamweight);
      console.log(this.womenFeatherweight);

      console.log(this.womenDefaultTab);
      console.log(this.menDefaultTab);
    } else {
      console.log("Ce tableau semble vide!")
    }
  }

  ngOnInit(): void {
  }
}
