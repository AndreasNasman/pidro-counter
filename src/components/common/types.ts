export type Bid = {
  points: number;
  team: Team;
};
export type Winner = Bid;

export type Team = "us" | "they";
export type Result = { [K in Team]: number };

export interface Round {
  bid?: Bid;
  result?: Result;
}

export type Game = Round[];
