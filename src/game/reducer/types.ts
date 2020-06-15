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

export interface State {
  game: Round[];
  phase: Phase;
  round: number;
  totalScore: Score;
}

export type Action =
  | { type: "ADD_BID"; payload: Bid }
  | { type: "ADD_SCORE"; payload: Score }
  | { type: "RESET" };
