import { State, Team } from "game/reducer/types";
import { ReactNode } from "react";

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
