export type Bid = {
  points: number;
  team: Team;
};
export type Winner = Bid;

export type Team = "us" | "they";
export type Score = { [K in Team]: number };

export interface Round {
  bid?: Bid;
  result?: Score;
}

export type Game = Round[];
