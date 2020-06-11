import { Bid, Score, State } from "reducers/game/types";

export interface Context {
  addBid: (bid: Readonly<Bid>) => void;
  addScore: (bid: Readonly<Score>) => void;
  reset: () => void;
  state: State;
}

export interface Props {
  readonly children: React.ReactNode;
}
