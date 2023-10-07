export type SelectRankingLabel = {
  value: string
  viewValue: string
}

export type FightersAndFightsElement = {
  Rank: number
  Name: string
  Division: string
  NumberFights: number
}

export type FightersAndWinsElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  WinPercentage: number
}

export type FightersAndKoWinsElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  Wins: number
  KoTko: string
}

export type FightersAndIpsgElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  Ipsg: number
}

export type FightersAndTkdownRElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  TkdownsRatio: number
}

export type FightersAndTkdownDElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  TakedownDef: number
}

export type FightersAndTkdownsElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  TakedownAcc: number
}

export type FightersAndStrkRatioElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  StrikingRatio: number
}

export type FightersAndStrikesElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  StrikingAcc: number
}

export type FightersAndSubWinsElement = {
  Rank: number
  FighterId: number
  Name: string
  Division: string
  NumberFights: number
  SubWins: number
  SubWinsPercentage: string
}
