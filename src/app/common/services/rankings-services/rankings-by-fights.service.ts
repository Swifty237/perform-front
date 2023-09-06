import { Injectable } from '@angular/core';
import { FightersAndFightsElement } from '../../utils/rankings-elements';
import { RankingsService } from './rankings.service';

@Injectable({
  providedIn: 'root'
})
export class RankingsByFightsService {

  menArray: FightersAndFightsElement[] = [];
  womenArray: FightersAndFightsElement[] = [];

  menFlyweight: FightersAndFightsElement[] = [];
  menBantamweight: FightersAndFightsElement[] = [];
  menFeatherweight: FightersAndFightsElement[] = [];
  menLightweight: FightersAndFightsElement[] = [];
  menWelterweight: FightersAndFightsElement[] = [];
  menMiddleweight: FightersAndFightsElement[] = [];
  menLightHeavyweight: FightersAndFightsElement[] = [];
  menHeavyweight: FightersAndFightsElement[] = [];

  womenStrawweight: FightersAndFightsElement[] = [];
  womenFlyweight: FightersAndFightsElement[] = [];
  womenBantamweight: FightersAndFightsElement[] = [];
  womenFeatherweight: FightersAndFightsElement[] = [];

  defaultTab: FightersAndFightsElement[] = [];

  constructor(public rankingsService: RankingsService) {

    this.rankingsService.getRankingsNumberFights$()
      .subscribe(
        (items) => {
          items.forEach(item => {
            (item["Division"].includes("Women's")) ? this.womenArray.push(item) : this.menArray.push(item);
          });

          this.womenArray.forEach(element => {
            switch (element["Division"]) {

              case "Women's Strawweight Division":
                this.womenStrawweight.push(element);
                break;

              case "Women's Flyweight Division":
                this.womenFlyweight.push(element);
                break;

              case "Women's Bantamweight Division":
                this.womenBantamweight.push(element);
                break;

              case "Women's Featherweight Division":
                this.womenFeatherweight.push(element);
                break;

              default:
                this.defaultTab.push(element);
            }
          });

          this.menArray.forEach(element => {
            switch (element["Division"]) {

              case "Flyweight Division":
                this.menFlyweight.push(element);
                break;

              case "Bantamweight Division":
                this.menBantamweight.push(element);
                break;

              case "Featherweight Division":
                this.menFeatherweight.push(element);
                break;

              case "Lightweight Division":
                this.menLightweight.push(element);

                break;

              case "Welterweight Division":
                this.menWelterweight.push(element);
                break;

              case "Middleweight Division":
                this.menMiddleweight.push(element);
                break;

              case "Light Heavyweight Division":
                this.menLightHeavyweight.push(element);
                break;

              case "Heavyweight Division":
                this.menHeavyweight.push(element);
                break;

              default:
                this.defaultTab.push(element)
            }
          })
        })

    // console.log(this.menFlyweight);
    // console.log(this.menBantamweight);
    // console.log(this.menFeatherweight);
    // console.log(this.menLightweight);
    // console.log(this.menWelterweight);
    // console.log(this.menMiddleweight);
    // console.log(this.menLightHeavyweight);
    // console.log(this.menHeavyweight);

    // console.log(this.womenStrawweight);
    // console.log(this.womenFlyweight);
    // console.log(this.womenBantamweight);
    // console.log(this.womenFeatherweight);

    // console.log(this.defaultTab);
  }
}