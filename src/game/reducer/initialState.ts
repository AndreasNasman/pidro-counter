import { State } from "./types";

export const initialState: State = {
  game: [],
  phase: "bid",
  round: 1,
  totalScore: { they: 0, us: 0 },
};
