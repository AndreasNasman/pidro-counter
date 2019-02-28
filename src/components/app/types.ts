export type Team = 'vi' | 'de';

export interface IResult {
  point: number;
  team: Team;
}

export interface ISet {
  bid?: IResult;
  round: number;
  score?: { [K in Team]: number };
}

export enum Phases {
  Bidding,
  Score,
}
