import { ReactNode } from "react";
import { Bid, Score, State } from "reducers/game/types";

export interface Context {
  addBid: (bid: Bid) => void;
  addScore: (bid: Score) => void;
  reset: () => void;
  state: State;
}

export interface Props {
  children: ReactNode;
}
