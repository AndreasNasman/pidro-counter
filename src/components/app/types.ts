export type Team = 'vi' | 'de';

export interface IResult {
  points: number;
  team: Team;
}

export type Score = { [K in Team]: number };

export interface ISet {
  bid: IResult;
  round: number;
  score?: Score;
}

export enum Phases {
  Bidding,
  Score,
}

export interface IGame {
  phase: Phases;
  score: Score;
  sets: ISet[];
}
