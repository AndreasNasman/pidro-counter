type Team = "us" | "they";

interface Bid {
  points: number;
  team: Team;
}

type Score = { [T in Team]: number };

interface Round {
  bid: Bid;
  score?: Score;
}

export interface State {
  game: Round[];
}

export type Action =
  | { type: "ADD_BID"; payload: Bid }
  | { type: "ADD_SCORE"; payload: Score }
  | { type: "RESET" };
