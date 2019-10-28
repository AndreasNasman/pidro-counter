export const MAXIMUM_POINTS = 14;
export const MINIMUM_POINTS = 6;

export type Team = "us" | "they";
export const TEAMS: Team[] = ["us", "they"];

export type Result = { [K in Team]: number };

export interface Score {
  points: number;
  team: Team;
}
export interface Round {
  bid?: Score;
  result?: Result;
}
