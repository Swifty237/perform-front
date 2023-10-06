import { Component, OnInit } from '@angular/core';
import { WomenStrawweight } from '../common/data/women/women-strawweight';
import { RankingsService } from '../common/services/rankings-services/rankings.service';
import { WomenBantamweight } from '../common/data/women/women-bantamweight';
import { WomenFeatherweight } from '../common/data/women/women-featherweight';
import { WomenFlyweight } from '../common/data/women/women-flyweight';
import { MenBantamweight } from '../common/data/men/men-bantamweight';
import { MenFeatherweight } from '../common/data/men/men-featherweight';
import { MenFlyweight } from '../common/data/men/men-flyweight';
import { MenHeavyweight } from '../common/data/men/men-heavyweight';
import { MenLightHeavyweight } from '../common/data/men/men-lightheavyweight';
import { MenLightweight } from '../common/data/men/men-lightweight';
import { MenMiddleweight } from '../common/data/men/men-middleweight';
import { MenWelterweight } from '../common/data/men/men-welterweight';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})

export class RankingsComponent implements OnInit {

  public womenStrawweight!: WomenStrawweight;
  public womenBantamweight!: WomenBantamweight;
  public womenFeatherweight!: WomenFeatherweight;
  public womenFlyweight!: WomenFlyweight;

  public menBantamweight!: MenBantamweight;
  public menFeatherweight!: MenFeatherweight;
  public menFlyweight!: MenFlyweight;
  public menHeavyweight!: MenHeavyweight;
  public menLightHeavyweight!: MenLightHeavyweight;
  public menLightweight!: MenLightweight;
  public menMiddleweight!: MenMiddleweight;
  public menWelterweight!: MenWelterweight;

  constructor(private rankingsService: RankingsService) { }

  ngOnInit(): void {
    this.womenStrawweight = new WomenStrawweight(this.rankingsService);
    this.womenBantamweight = new WomenBantamweight(this.rankingsService);
    this.womenFeatherweight = new WomenFeatherweight(this.rankingsService);
    this.womenFlyweight = new WomenFlyweight(this.rankingsService);

    this.menBantamweight = new MenBantamweight(this.rankingsService);
    this.menFeatherweight = new MenFeatherweight(this.rankingsService);
    this.menFlyweight = new MenFlyweight(this.rankingsService);
    this.menHeavyweight = new MenHeavyweight(this.rankingsService);
    this.menLightHeavyweight = new MenLightHeavyweight(this.rankingsService);
    this.menLightweight = new MenLightweight(this.rankingsService);
    this.menMiddleweight = new MenMiddleweight(this.rankingsService);
    this.menWelterweight = new MenWelterweight(this.rankingsService);
  }
}
