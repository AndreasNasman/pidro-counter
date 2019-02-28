export type Team = 'vi' | 'de';

export interface IResult {
  points: number;
  team: Team;
}

export interface ISet {
  bid?: IResult;
  round: number;
  score?: { [K in Team]: number };
}

export type Game = ISet[];

export enum Phases {
  Bidding,
  Score,
}
