export type Team = "us" | "they";
export type Score = { [K in Team]: number };

export type Bid = {
  points: number;
  team: Team;
};
export type Winner = Bid;

export interface Round {
  bid?: Bid;
  result?: Score;
}
export type Phase = keyof Round;

export type Game = { rounds: Round[]; score: Score };
