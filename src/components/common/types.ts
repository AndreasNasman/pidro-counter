export type Team = "us" | "they";
export type Result = { [K in Team]: number };

export interface Score {
  points: number;
  team: Team;
}
export interface Round {
  bid?: Score;
  result?: Result;
}
