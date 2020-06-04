export type Team = "us" | "they";
export type Score = { [T in Team]: number };

export interface Bid {
  points: number;
  team: Team;
}
export type Winner = Bid;

export interface Round {
  bid: Bid;
  result?: Score;
}
export type Phase = keyof Round;

export interface Game {
  rounds: Round[];
  score: Score;
}
