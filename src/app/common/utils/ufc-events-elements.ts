export type UfcEventsElement = {
    _id: string
    EventId: number
    LeagueId: number
    Name: string
    shortName: string
    Season: number
    Day: string
    DateTime: string
    Status: string
    Active: boolean
    Fights: FightsElement[]
}

export type FightsElement = {
    FightId: number
    Order: number
    Status: string
    WeightClass: string
    CardSegment: string
    Referee: string
    Rounds: number
    ResultClock: number
    ResultRound: number
    ResultType: string
    WinnerId: number
    Active: boolean
    Fighters: FightersElement[]
}

export type FightersElement = {
    FighterId: number
    FirstName: string
    LastName: string
    PreFightWins: number
    PreFightLosses: number
    PreFightDraws: number
    PreFightNoContests: number
    Winner: boolean
    Moneyline: number
    Active: boolean

}