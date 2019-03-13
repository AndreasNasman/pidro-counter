export type Team = 'vi' | 'de';

export type Leader = Team | undefined;

export enum Phases {
  Bidding,
  Score,
}

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
  leader?: Team;
  phase: Phases;
  score: Score;
  sets: ISet[];
  teams: Team[];
}
