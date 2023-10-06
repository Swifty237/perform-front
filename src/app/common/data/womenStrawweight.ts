import {
    FightersAndFightsElement,
    FightersAndIpsgElement,
    FightersAndKoWinsElement,
    FightersAndStrikesElement,
    FightersAndStrkRatioElement,
    FightersAndSubWinsElement,
    FightersAndTkdownDElement,
    FightersAndTkdownsElement,
    FightersAndWinsElement
} from "../utils/rankings-elements";

class WomenStrawweight {
    constructor(
        public rankingsByFights: FightersAndFightsElement,
        public rankingsByVictories: FightersAndWinsElement,
        public rankingsByIpsg: FightersAndIpsgElement,
        public rankingsByKowins: FightersAndKoWinsElement,
        public rankingsByStrikes: FightersAndStrikesElement,
        public rankingsByStrikesRatio: FightersAndStrkRatioElement,
        public rankingsBySubmissions: FightersAndSubWinsElement,
        public rankingsByTakedownDefense: FightersAndTkdownDElement,
        public rankingsByTakedowns: FightersAndTkdownsElement,
        public rankingsByTakedownRatio: FightersAndStrkRatioElement
    ) { }
}

export default WomenStrawweight;