export type Team = 'vi' | 'de';

export interface IResult {
  points: number;
  team: Team;
}

export enum Phases {
  Bidding,
  Score,
}

export type Score = { [K in Team]: number };

export interface ISet {
  bid?: IResult;
  phase: Phases;
  round: number;
  score?: Score;
}

export type Game = ISet[];

export interface IFelt {
  scoreboardMinHeight: string;
}
