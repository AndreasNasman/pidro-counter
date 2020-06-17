export type Team = "us" | "they";

export interface Bid {
  points: number;
  team: Team;
}

export type Score = { [T in Team]: number };

export interface Round {
  bid: Bid;
  score?: Score;
}

export type Phase = keyof Round;

export type Winner = Team | null;

export interface State {
  game: Round[];
  phase: Phase;
  round: number;
  totalScore: Score;
  winner: Winner;
}

export type Action =
  | { payload: Bid; type: "ADD_BID" }
  | { payload: Score; type: "ADD_SCORE" }
  | { type: "RESET" }
  | { payload: Winner; type: "SET_WINNER" }
  | { payload: Score; type: "UPDATE_TOTAL_SCORE" };
