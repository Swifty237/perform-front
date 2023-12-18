import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RankingService } from '../common/services/node-backend/ranking/ranking.service';
import {
  FightersAndFightsElement,
  FightersAndKoWinsElement,
  FightersAndLevelElement,
  FightersAndStrikesElement,
  FightersAndStrkRatioElement,
  FightersAndSubWinsElement,
  FightersAndTkdownDElement,
  FightersAndTkdownRElement,
  FightersAndTkdownsElement,
  FightersAndWinsElement,
  SelectedLabelElement
} from '../common/elements-types/ranking-element';
import { map } from 'rxjs';
import { ProfileElement } from '../common/elements-types/profile-element';
import { OtherSpringService } from '../common/services/spring-backend/other/other-spring.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  menLevels: FightersAndLevelElement[] = [];
  womenLevels: FightersAndLevelElement[] = [];

  menFights: FightersAndFightsElement[] = [];
  menWins: FightersAndWinsElement[] = [];
  menKoWins: FightersAndKoWinsElement[] = [];
  menSubmissionsWins: FightersAndSubWinsElement[] = [];
  menStrikes: FightersAndStrikesElement[] = [];
  menStrikeRatio: FightersAndStrkRatioElement[] = [];
  menTakedowns: FightersAndTkdownsElement[] = [];
  menTakedownDefenses: FightersAndTkdownDElement[] = [];
  menTakedownRatio: FightersAndTkdownRElement[] = [];

  womenFights: FightersAndFightsElement[] = [];
  womenWins: FightersAndWinsElement[] = [];
  womenKoWins: FightersAndKoWinsElement[] = [];
  womenSubmissionsWins: FightersAndSubWinsElement[] = [];
  womenStrikes: FightersAndStrikesElement[] = [];
  womenStrikeRatio: FightersAndStrkRatioElement[] = [];
  womenTakedowns: FightersAndTkdownsElement[] = [];
  womenTakedownDefenses: FightersAndTkdownDElement[] = [];
  womenTakedownRatio: FightersAndTkdownRElement[] = [];

  displayedColumns: string[] = ['rank', 'name', 'level'];
  dataSource = new MatTableDataSource<FightersAndLevelElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  panelOpenState = false;

  selectedDivision = "men-bantam";

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

  defaultActiveProfile: ProfileElement = {
    id: 0,
    description: "Default profile",
    fights: 1,
    wins: 1,
    kowins: 1,
    submissionwins: 1,
    strikes: 1,
    strikesratio: 1,
    takedowns: 1,
    takedowndefense: 1,
    takedownsratio: 1,
    level: 1,
    isActive: true
  }

  divider!: number;
  activeProfile!: ProfileElement;

  constructor(private _rankingService: RankingService, private _otherSpringService: OtherSpringService) { }

  ngOnInit(): void {

    this.getFightElements(this.selectedDivision);
    this.getWinElements(this.selectedDivision);
    this.getKoWinElements(this.selectedDivision);
    this.getSubmissionElements(this.selectedDivision);
    this.getStrikeElements(this.selectedDivision);
    this.getStrikingRElements(this.selectedDivision);
    this.getTakedownElements(this.selectedDivision);
    this.getTakedownDElements(this.selectedDivision);
    this.getTakedownRElements(this.selectedDivision);

    this.getLevelElements(this.selectedDivision);
    this.activeProfile = this.defaultActiveProfile;

    this.divider = parseInt(this.activeProfile.fights.toString()) +
      parseInt(this.activeProfile.wins.toString()) +
      parseInt(this.activeProfile.kowins.toString()) +
      parseInt(this.activeProfile.strikes.toString()) +
      parseInt(this.activeProfile.strikesratio.toString()) +
      parseInt(this.activeProfile.submissionwins.toString()) +
      parseInt(this.activeProfile.takedowns.toString()) +
      parseInt(this.activeProfile.takedowndefense.toString()) +
      parseInt(this.activeProfile.takedownsratio.toString());
  }

  onSelectionChange(event: any) {

    this.selectedDivision = event.value;

    //
    this.getFightElements(this.selectedDivision);
    this.getWinElements(this.selectedDivision);
    this.getKoWinElements(this.selectedDivision);
    this.getSubmissionElements(this.selectedDivision);
    this.getStrikeElements(this.selectedDivision);
    this.getStrikingRElements(this.selectedDivision);
    this.getTakedownElements(this.selectedDivision);
    this.getTakedownDElements(this.selectedDivision);
    this.getTakedownRElements(this.selectedDivision);

    // level of selected Division
    this.getLevelElements(this.selectedDivision);
  }

  // fights
  getFightElements(selection: string) {

    this.menFights = []
    this.womenFights = []

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsNumberFights$()
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
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsNumberFights$()
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
            })
      }
    })
  }

  // wins
  getWinElements(selection: string) {

    this.menWins = [];
    this.womenWins = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menWins.length; i++) {
                let element = this.menWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenWins.length; i++) {
                let element = this.womenWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Ko wins
  getKoWinElements(selection: string) {

    this.menKoWins = [];
    this.womenKoWins = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsKoWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menKoWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menKoWins.length; i++) {
                let element = this.menKoWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsKoWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenKoWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenKoWins.length; i++) {
                let element = this.womenKoWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Submissions wins
  getSubmissionElements(selection: string) {

    this.menSubmissionsWins = [];
    this.womenSubmissionsWins = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsSubmissionsWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menSubmissionsWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menSubmissionsWins.length; i++) {
                let element = this.menSubmissionsWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsSubmissionsWins$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenSubmissionsWins.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenSubmissionsWins.length; i++) {
                let element = this.womenSubmissionsWins[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Strikes
  getStrikeElements(selection: string) {

    this.menStrikes = [];
    this.womenStrikes = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingStrikes$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menStrikes.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menStrikes.length; i++) {
                let element = this.menStrikes[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingStrikes$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenStrikes.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenStrikes.length; i++) {
                let element = this.womenStrikes[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Striking Ratio
  getStrikingRElements(selection: string) {

    this.menStrikeRatio = [];
    this.womenStrikeRatio = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsStrikingRatio$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menStrikeRatio.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menStrikeRatio.length; i++) {
                let element = this.menStrikeRatio[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsStrikingRatio$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenStrikeRatio.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenStrikeRatio.length; i++) {
                let element = this.womenStrikeRatio[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Takedown
  getTakedownElements(selection: string) {

    this.menTakedowns = [];
    this.womenTakedowns = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsTakedowns$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menTakedowns.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menTakedowns.length; i++) {
                let element = this.menTakedowns[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsTakedowns$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenTakedowns.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenTakedowns.length; i++) {
                let element = this.womenTakedowns[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Takedown Defenses
  getTakedownDElements(selection: string) {

    this.menTakedownDefenses = [];
    this.womenTakedownDefenses = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsTakedownDefense$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menTakedownDefenses.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menTakedownDefenses.length; i++) {
                let element = this.menTakedownDefenses[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingsTakedownDefense$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenTakedownDefenses.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenTakedownDefenses.length; i++) {
                let element = this.womenTakedownDefenses[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Takedown ratio
  getTakedownRElements(selection: string) {

    this.menTakedownRatio = [];
    this.womenTakedownRatio = [];

    this.menSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingTakedownRatio$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.menTakedownRatio.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.menTakedownRatio.length; i++) {
                let element = this.menTakedownRatio[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })

    this.womenSelectLabels.forEach(elt => {
      if (elt.value == selection) {

        this._rankingService.getRankingTakedownRatio$()
          .pipe(
            map(items => {
              items.forEach(item => {
                (item["Division"] == elt.viewValue + " Division") ? this.womenTakedownRatio.push(item) : null;
              })
            })
          )
          .subscribe(
            () => {
              for (let i = 0; i < this.womenTakedownRatio.length; i++) {
                let element = this.womenTakedownRatio[i];
                element["Rank"] = i + 1;
              }
            })
      }
    })
  }

  // Method which allows you to choose the fighter profile with which the level calculations will be made
  loadActiveProfile(tab: ProfileElement[]) {

    tab.forEach(profile => {
      if (profile.isActive) {
        this.activeProfile = profile;
      }
    })

    if (!this.activeProfile) {
      this.activeProfile = this.defaultActiveProfile;
    }
  }

  // Method which allows you to calculate and display the rank of all fighters
  getLevelElements(division: string) {

    this.menLevels = [];
    this.womenLevels = [];

    this._otherSpringService.loadAllFighterProfiles$()
      .subscribe({
        next: (data: ProfileElement[]) => {

          this.loadActiveProfile(data);

          this.menSelectLabels.forEach(elt => {

            if (elt.value == division) {

              this._rankingService.getRankingsLevel$()
                .pipe(
                  map(items => {
                    items.forEach(item => {
                      (item["Division"] == elt.viewValue + " Division") ? this.menLevels.push(item) : null;
                    })
                  })
                )
                .subscribe(
                  () => {

                    this.menLevels.forEach(elt => {

                      this.menFights.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.fights.toString());
                        }
                      })

                      this.menWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.wins.toString());
                        }
                      })

                      this.menKoWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.kowins.toString());
                        }
                      })

                      this.menStrikes.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.strikes.toString());
                        }
                      })


                      this.menStrikeRatio.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.strikesratio.toString());
                        }
                      })


                      this.menSubmissionsWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.submissionwins.toString());
                        }
                      })


                      this.menTakedowns.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedowns.toString());
                        }
                      })

                      this.menTakedownDefenses.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedowndefense.toString());
                        }
                      })

                      this.menTakedownRatio.forEach(item => {

                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedownsratio.toString());
                          elt.Level = parseFloat(((elt.Level) / this.divider).toFixed(2));
                        }
                      })
                    })

                    this.menLevels = this.menLevels.sort(this.compareLevel);
                    this.addRank(this.menLevels);
                    this.dataSource = new MatTableDataSource<FightersAndLevelElement>(this.menLevels);
                    this.dataSource.paginator = this.paginator;
                  })
            }
          })

          this.womenSelectLabels.forEach(elt => {
            if (elt.value == division) {

              this._rankingService.getRankingsLevel$()
                .pipe(
                  map(items => {
                    items.forEach(item => {
                      (item["Division"] == elt.viewValue + " Division") ? this.womenLevels.push(item) : null;
                    })
                  })
                )
                .subscribe(
                  () => {
                    this.womenLevels.forEach(elt => {

                      this.womenFights.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += item.Rank * this.activeProfile.fights;
                        }
                      })

                      this.womenWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.wins.toString());
                        }
                      })

                      this.womenKoWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.kowins.toString());
                        }
                      })

                      this.womenStrikes.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.strikes.toString());
                        }
                      })

                      this.womenStrikeRatio.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.strikesratio.toString());
                        }
                      })

                      this.womenSubmissionsWins.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.submissionwins.toString());
                        }
                      })

                      this.womenTakedowns.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedowns.toString());
                        }
                      })

                      this.womenTakedownDefenses.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedowndefense.toString());
                        }
                      })

                      this.womenTakedownRatio.forEach(item => {
                        if (elt.Name === item.Name && elt.FighterId === item.FighterId) {
                          elt.Level += parseInt(item.Rank.toString()) * parseInt(this.activeProfile.takedownsratio.toString());
                          elt.Level = parseFloat(((parseInt(elt.Level.toString())) / parseInt(this.divider.toString())).toFixed(2));
                        }
                      })
                    })

                    this.womenLevels = this.womenLevels.sort(this.compareLevel);
                    this.addRank(this.womenLevels);
                    this.dataSource = new MatTableDataSource<FightersAndLevelElement>(this.womenLevels);
                    this.dataSource.paginator = this.paginator;

                  })
            }
          })






        },
        error: (err: any) => console.error('An error occurred:', err)
      })
  }

  compareLevel = (a: FightersAndLevelElement, b: FightersAndLevelElement) => {
    return parseInt(a.Level.toString()) - parseInt(b.Level.toString());
  }

  addRank = (tab: FightersAndLevelElement[]) => {
    for (let i = 0; i < tab.length; i++) {
      tab[i].Rank = i + 1;
    }
  }
}