export interface IBid {
  point?: number;
  team?: string;
}

export type Team = 'vi' | 'de';

export interface ISet {
  bid?: IBid;
  round: number;
  score?: { [K in Team]: number };
}
