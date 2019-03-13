export enum Phases {
  Bidding,
  Score,
}

export type Team = 'vi' | 'de';

export interface IResult {
  points: number;
  team: Team;
}

export type Score = IResult[];

export interface ISet {
  bid: IResult;
  round: number;
  score?: Score;
}

export interface IGame {
  phase: Phases;
  score: Score;
  sets: ISet[];
  teams: Team[];
}
