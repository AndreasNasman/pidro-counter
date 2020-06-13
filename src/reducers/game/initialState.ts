import { State } from "./types";

export const initialState: State = {
  game: [],
  phase: "bid",
  totalScore: { they: 0, us: 0 },
};
