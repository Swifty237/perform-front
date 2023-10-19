import { Component, OnInit } from '@angular/core';
import { UfcEventsService } from '../common/services/ufc-events/ufc-events.service';
import { EventsFightersAndIpsg, FighterAndEventToDisplayElement, UfcEventsElement } from '../common/utils/ufc-events-elements';
import { MenBantamweight } from '../common/data/men/men-bantamweight';
import { MenFeatherweight } from '../common/data/men/men-featherweight';
import { MenFlyweight } from '../common/data/men/men-flyweight';
import { MenHeavyweight } from '../common/data/men/men-heavyweight';
import { MenLightHeavyweight } from '../common/data/men/men-lightheavyweight';
import { MenLightweight } from '../common/data/men/men-lightweight';
import { MenMiddleweight } from '../common/data/men/men-middleweight';
import { MenWelterweight } from '../common/data/men/men-welterweight';
import { WomenBantamweight } from '../common/data/women/women-bantamweight';
import { WomenFeatherweight } from '../common/data/women/women-featherweight';
import { WomenFlyweight } from '../common/data/women/women-flyweight';
import { WomenStrawweight } from '../common/data/women/women-strawweight';
import { OtherSpringService } from '../common/services/spring-services/other-spring.service';
import { RankingsService } from '../common/services/rankings-services/rankings.service';

@Component({
  selector: 'app-pronostics',
  templateUrl: './pronostics.component.html',
  styleUrls: ['./pronostics.component.scss']
})

export class PronosticsComponent implements OnInit {
  panelOpenState = false;
  ufcEvents!: UfcEventsElement[];

  ufcEventsToDisplay!: EventsFightersAndIpsg

  womenStrawweight!: WomenStrawweight;
  womenBantamweight!: WomenBantamweight;
  womenFeatherweight!: WomenFeatherweight;
  womenFlyweight!: WomenFlyweight;

  menBantamweight!: MenBantamweight;
  menFeatherweight!: MenFeatherweight;
  menFlyweight!: MenFlyweight;
  menHeavyweight!: MenHeavyweight;
  menLightHeavyweight!: MenLightHeavyweight;
  menLightweight!: MenLightweight;
  menMiddleweight!: MenMiddleweight;
  menWelterweight!: MenWelterweight;

  constructor(private ufcEventsService: UfcEventsService, private rankingsService: RankingsService, private otherSpringService: OtherSpringService) { }

  ngOnInit(): void {
    this.loadUfcEvents();

    this.womenStrawweight = new WomenStrawweight(this.rankingsService, this.otherSpringService);
    this.womenBantamweight = new WomenBantamweight(this.rankingsService, this.otherSpringService);
    this.womenFeatherweight = new WomenFeatherweight(this.rankingsService, this.otherSpringService);
    this.womenFlyweight = new WomenFlyweight(this.rankingsService, this.otherSpringService);

    this.menBantamweight = new MenBantamweight(this.rankingsService, this.otherSpringService);
    this.menFeatherweight = new MenFeatherweight(this.rankingsService, this.otherSpringService);
    this.menFlyweight = new MenFlyweight(this.rankingsService, this.otherSpringService);
    this.menHeavyweight = new MenHeavyweight(this.rankingsService, this.otherSpringService);
    this.menLightHeavyweight = new MenLightHeavyweight(this.rankingsService, this.otherSpringService);
    this.menLightweight = new MenLightweight(this.rankingsService, this.otherSpringService);
    this.menMiddleweight = new MenMiddleweight(this.rankingsService, this.otherSpringService);
    this.menWelterweight = new MenWelterweight(this.rankingsService, this.otherSpringService);

    // this.getFightersIpsg();
  }

  loadUfcEvents() {
    this.ufcEventsService.getAllUfcEvents$()
      .subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.ufcEvents = data;
          }
        },

        error: err => console.error('An error occurred:', err)
      });
  }

  getFightersIpsg() {
    this.ufcEventsService.getAllUfcEvents$()
      .subscribe({
        next: (data) => {

          if (data.length > 0) {
            let ufcEventElement: FighterAndEventToDisplayElement;

            for (let element of this.ufcEvents) {
              for (let fightElement of element.Fights) {
                // console.log(fightElement.Fighters);

                for (let rankingElement of this.womenStrawweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.First.womenStrawweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.Second.womenStrawweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.womenBantamweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.First.womenBantamweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.Second.womenBantamweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.womenFeatherweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.First.womenFeatherweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.Second.womenFeatherweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.womenFlyweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.First.womenFlyweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Women.Second.womenFlyweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menBantamweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menBantamweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menBantamweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menFeatherweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menFeatherweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menFeatherweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menFlyweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menFlyweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menFlyweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menHeavyweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menHeavyweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menHeavyweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menLightHeavyweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menLightHeavyweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menLightHeavyweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menLightweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menLightweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menLightweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menMiddleweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menMiddleweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menMiddleweight.push(ufcEventElement);
                  }
                }

                for (let rankingElement of this.menWelterweight.rankingByIpsgArray) {
                  if (fightElement.Fighters[0]?.FirstName + " " + fightElement.Fighters[0]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[0].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.First.menWelterweight.push(ufcEventElement);
                  }

                  if (fightElement.Fighters[1]?.FirstName + " " + fightElement.Fighters[1]?.LastName == rankingElement.Name) {

                    ufcEventElement = {
                      EventId: element.EventId,
                      Event: element.Name,
                      Date: element.Day,
                      Status: element.Status,
                      FightId: fightElement.FightId,
                      Division: rankingElement.Division,
                      Fighter: {
                        FighterId: fightElement.Fighters[1].FighterId,
                        Name: rankingElement.Name,
                        Ipsg: rankingElement.Ipsg
                      }
                    };

                    this.ufcEventsToDisplay.Men.Second.menWelterweight.push(ufcEventElement);
                  }
                }
              }
            }
          }
        },

        error: err => console.error('An error occurred:', err)
      });
  }




}
