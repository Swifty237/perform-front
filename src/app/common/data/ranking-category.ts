import { Component } from "@angular/core";
import {
    FightersAndFightsElement,
    FightersAndIpsgElement,
    FightersAndKoWinsElement,
    FightersAndStrikesElement,
    FightersAndStrkRatioElement,
    FightersAndSubWinsElement,
    FightersAndTkdownDElement,
    FightersAndTkdownRElement,
    FightersAndTkdownsElement,
    FightersAndWinsElement
} from "../utils/rankings-elements";

abstract class RankingCategory {

    rankingByNumberFightsArray: FightersAndFightsElement[] = [];
    rankingByVictoriesArray: FightersAndWinsElement[] = [];
    rankingByKowinsArray: FightersAndKoWinsElement[] = [];
    rankingByStrikesArray: FightersAndStrikesElement[] = [];
    rankingByStrikesRatioArray: FightersAndStrkRatioElement[] = [];
    rankingBySubmissionsArray: FightersAndSubWinsElement[] = [];
    rankingByTakedownDefenseArray: FightersAndTkdownDElement[] = [];
    rankingByTakedownsArray: FightersAndTkdownsElement[] = [];
    rankingByTakedownRatioArray: FightersAndTkdownRElement[] = [];
    rankingByIpsgArray: FightersAndIpsgElement[] = [];

    abstract rankingByNumberFights(): void;
    abstract rankingByVictories(): void
    abstract rankingByKowins(): void
    abstract rankingByStrikes(): void
    abstract rankingByStrikesRatio(): void
    abstract rankingBySubmissions(): void
    abstract rankingByTakedownDefense(): void
    abstract rankingByTakedowns(): void
    abstract rankingByTakedownRatio(): void
    abstract rankingByIpsg(): void;
}

export default RankingCategory;