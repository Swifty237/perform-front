import { map } from "rxjs";
import { RankingsService } from "../../services/rankings-services/rankings.service";
import RankingCategory from "../ranking-category";
import { FightersAndIpsgElement } from "../../utils/rankings-elements";
import { PreferenceElement } from "../../utils/preference-elements";
import { OtherSpringService } from "../../services/spring-services/other-spring.service";

export class MenBantamweight extends RankingCategory {

    private _division = "Bantamweight Division";
    private _ipsgCoefficients: PreferenceElement = {
        id: 0,
        name: '',
        fights: 1,
        wins: 1,
        kowins: 1,
        submissionwins: 1,
        strikes: 1,
        strikesratio: 1,
        takedowns: 1,
        takedowndefense: 1,
        takedownsratio: 1,
        ipsg: 1,
        isActive: false
    };

    constructor(private rankingsService: RankingsService, private otherSpringService: OtherSpringService) {
        super();

        this.rankingByNumberFights();
        this.rankingByVictories();
        this.rankingByKowins();
        this.rankingByStrikes();
        this.rankingByStrikesRatio();
        this.rankingBySubmissions();
        this.rankingByTakedownDefense();
        this.rankingByTakedowns();
        this.rankingByTakedownRatio();
        this.rankingByIpsg();

        this.otherSpringService.loadAllUserPreferences()
            .subscribe({
                next: data => {

                    for (let element of data) {
                        if (element.isActive == true) {
                            this._ipsgCoefficients = element;
                        }
                    }
                }
            })
    }

    override rankingByNumberFights(): void {
        this.rankingsService
            .getRankingsNumberFights$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByNumberFightsArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByNumberFightsArray.length; i++) {
                        let element = this.rankingByNumberFightsArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByVictories(): void {
        this.rankingsService
            .getRankingsWins$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByVictoriesArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByVictoriesArray.length; i++) {
                        let element = this.rankingByVictoriesArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByKowins(): void {
        this.rankingsService
            .getRankingsKoWins$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByKowinsArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByKowinsArray.length; i++) {
                        let element = this.rankingByKowinsArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByStrikes(): void {
        this.rankingsService
            .getRankingStrikes$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByStrikesArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByStrikesArray.length; i++) {
                        let element = this.rankingByStrikesArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByStrikesRatio(): void {
        this.rankingsService
            .getRankingsStrikingRatio$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByStrikesRatioArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByStrikesRatioArray.length; i++) {
                        let element = this.rankingByStrikesRatioArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingBySubmissions(): void {
        this.rankingsService
            .getRankingsSubmissionsWins$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingBySubmissionsArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingBySubmissionsArray.length; i++) {
                        let element = this.rankingBySubmissionsArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByTakedownDefense(): void {
        this.rankingsService
            .getRankingsTakedownDefense$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByTakedownDefenseArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByTakedownDefenseArray.length; i++) {
                        let element = this.rankingByTakedownDefenseArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByTakedowns(): void {
        this.rankingsService
            .getRankingsTakedowns$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByTakedownsArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByTakedownsArray.length; i++) {
                        let element = this.rankingByTakedownsArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByTakedownRatio(): void {
        this.rankingsService
            .getRankingTakedownRatio$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByTakedownRatioArray.push(item) : null;
                    });
                })
            )
            .subscribe(
                () => {
                    for (let i = 0; i < this.rankingByTakedownRatioArray.length; i++) {
                        let element = this.rankingByTakedownRatioArray[i];
                        element["Rank"] = i + 1;
                    };
                })
    }

    override rankingByIpsg(): void {
        this.rankingsService
            .getRankingsIspg$()
            .pipe(
                map(items => {
                    items.forEach(item => {
                        (item["Division"] == this._division) ? this.rankingByIpsgArray.push(item) : null;
                    });
                })
            )
            .subscribe({
                next: () => {
                    this.rankingByIpsgArray.forEach(ipsgItem => {
                        this.otherSpringService.loadAllUserPreferences()
                            .subscribe({
                                next: (data: PreferenceElement[]) => {

                                    for (let element of data) {
                                        if (element.isActive == true) {
                                            this._ipsgCoefficients = element;
                                        }
                                    }

                                    let wins: number = parseInt(this._ipsgCoefficients.wins.toString());
                                    let kowins: number = parseInt(this._ipsgCoefficients.kowins.toString());
                                    let strikes: number = parseInt(this._ipsgCoefficients.strikes.toString());
                                    let strikesratio: number = parseInt(this._ipsgCoefficients.strikesratio.toString());
                                    let submissionwins: number = parseInt(this._ipsgCoefficients.submissionwins.toString());
                                    let takedowndefense: number = parseInt(this._ipsgCoefficients.takedowndefense.toString());
                                    let takedowns: number = parseInt(this._ipsgCoefficients.takedowns.toString());
                                    let takedownsratio: number = parseInt(this._ipsgCoefficients.takedownsratio.toString());
                                    let calculDivider: number = wins + kowins + strikes + strikesratio + submissionwins + takedowndefense + takedowns + takedownsratio;


                                    this.rankingByVictoriesArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.wins;
                                        }
                                    })

                                    this.rankingByKowinsArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.kowins;
                                        }
                                    })

                                    this.rankingByStrikesArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.strikes;
                                        }
                                    })

                                    this.rankingByStrikesRatioArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.strikesratio;
                                        }
                                    })

                                    this.rankingBySubmissionsArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.submissionwins
                                        }
                                    })

                                    this.rankingByTakedownDefenseArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.takedowndefense;
                                        }
                                    })

                                    this.rankingByTakedownsArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg += item.Rank * this._ipsgCoefficients.takedowns;
                                        }
                                    })

                                    this.rankingByTakedownRatioArray.forEach(item => {
                                        if (ipsgItem.Name === item.Name && ipsgItem.FighterId === item.FighterId) {
                                            ipsgItem.Ipsg = parseFloat(((ipsgItem.Ipsg + item.Rank) * this._ipsgCoefficients.takedownsratio / calculDivider).toFixed(2));
                                        }
                                    })

                                    this.rankingByIpsgArray = this.rankingByIpsgArray.sort(this.compareByIpsg);
                                    this.addRank(this.rankingByIpsgArray);
                                }
                            })
                    })
                }
            })
    }

    compareByIpsg = (a: FightersAndIpsgElement, b: FightersAndIpsgElement) => {
        return a.Ipsg - b.Ipsg;
    }

    addRank = (tab: FightersAndIpsgElement[]) => {
        for (let i = 0; i < tab.length; i++) {
            tab[i].Rank = i + 1;
        }
    }
}