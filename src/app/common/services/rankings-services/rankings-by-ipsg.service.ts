import { Injectable } from '@angular/core';
import { FightersAndIpsgElement } from '../../utils/rankings-elements';
import { RankingsService } from './rankings.service';

@Injectable({
  providedIn: 'root'
})
export class RankingsByIpsgService {

  menArray: FightersAndIpsgElement[] = [];
  womenArray: FightersAndIpsgElement[] = [];

  menFlyweight: FightersAndIpsgElement[] = [];
  menBantamweight: FightersAndIpsgElement[] = [];
  menFeatherweight: FightersAndIpsgElement[] = [];
  menLightweight: FightersAndIpsgElement[] = [];
  menWelterweight: FightersAndIpsgElement[] = [];
  menMiddleweight: FightersAndIpsgElement[] = [];
  menLightHeavyweight: FightersAndIpsgElement[] = [];
  menHeavyweight: FightersAndIpsgElement[] = [];

  womenStrawweight: FightersAndIpsgElement[] = [];
  womenFlyweight: FightersAndIpsgElement[] = [];
  womenBantamweight: FightersAndIpsgElement[] = [];
  womenFeatherweight: FightersAndIpsgElement[] = [];

  defaultTab: FightersAndIpsgElement[] = [];

  constructor(public rankingsService: RankingsService) {

    this.rankingsService.getRankingsIspg$()
      .subscribe((items) => {
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
        });

        for (let i = 0; i < this.menFlyweight.length; i++) {
          let element = this.menFlyweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menBantamweight.length; i++) {
          let element = this.menBantamweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menFeatherweight.length; i++) {
          let element = this.menFeatherweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menLightweight.length; i++) {
          let element = this.menLightweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menWelterweight.length; i++) {
          let element = this.menWelterweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menMiddleweight.length; i++) {
          let element = this.menMiddleweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menLightHeavyweight.length; i++) {
          let element = this.menLightHeavyweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.menHeavyweight.length; i++) {
          let element = this.menHeavyweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.womenStrawweight.length; i++) {
          let element = this.womenStrawweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.womenFlyweight.length; i++) {
          let element = this.womenFlyweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.womenBantamweight.length; i++) {
          let element = this.menFlyweight[i];
          element["Rank"] = i + 1;
        }

        for (let i = 0; i < this.womenFeatherweight.length; i++) {
          let element = this.womenFeatherweight[i];
          element["Rank"] = i + 1;
        }
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
