import { ReactNode } from "react";
import { State, Team } from "reducers/game/types";

export interface Input {
  points: number;
  team: Team;
}

export interface Context {
  addBid: (input: Input) => void;
  addScore: (input: Input) => void;
  reset: () => void;
  state: State;
}

export interface Props {
  children: ReactNode;
}
