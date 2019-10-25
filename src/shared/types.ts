export interface Round {
  bid?: Score;
  result?: Result;
}
export interface Score {
  points: number;
  team: Team;
}

export type Phase = keyof Round;
export type Result = {
  loser: Score;
  winner: Score;
};
export type Team = "us" | "they";
