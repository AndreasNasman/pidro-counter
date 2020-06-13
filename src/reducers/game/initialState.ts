import { State } from "./types";

export const initialState: State = {
  game: [],
  phase: "bid",
  score: { they: 0, us: 0 },
};
