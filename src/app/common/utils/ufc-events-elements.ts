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

export type FighterAndEventToDisplayElement = {
    EventId: number
    Event: string
    Date: string
    Status: string
    FightId: number
    Division: string
    Fighter: {
        FighterId: number
        Name: string
        Ipsg: number
    }
}

export type EventsFightersAndIpsg = {
    Women: {
        First: {
            womenStrawweight: FighterAndEventToDisplayElement[]
            womenBantamweight: FighterAndEventToDisplayElement[]
            womenFeatherweight: FighterAndEventToDisplayElement[]
            womenFlyweight: FighterAndEventToDisplayElement[]
        }
        Second: {
            womenStrawweight: FighterAndEventToDisplayElement[]
            womenBantamweight: FighterAndEventToDisplayElement[]
            womenFeatherweight: FighterAndEventToDisplayElement[]
            womenFlyweight: FighterAndEventToDisplayElement[]

        }
    }
    Men: {
        First: {
            menBantamweight: FighterAndEventToDisplayElement[]
            menFeatherweight: FighterAndEventToDisplayElement[]
            menFlyweight: FighterAndEventToDisplayElement[]
            menHeavyweight: FighterAndEventToDisplayElement[]
            menLightHeavyweight: FighterAndEventToDisplayElement[]
            menLightweight: FighterAndEventToDisplayElement[]
            menMiddleweight: FighterAndEventToDisplayElement[]
            menWelterweight: FighterAndEventToDisplayElement[]
        }
        Second: {
            menBantamweight: FighterAndEventToDisplayElement[]
            menFeatherweight: FighterAndEventToDisplayElement[]
            menFlyweight: FighterAndEventToDisplayElement[]
            menHeavyweight: FighterAndEventToDisplayElement[]
            menLightHeavyweight: FighterAndEventToDisplayElement[]
            menLightweight: FighterAndEventToDisplayElement[]
            menMiddleweight: FighterAndEventToDisplayElement[]
            menWelterweight: FighterAndEventToDisplayElement[]
        }
    }
}
