import { MAXIMUM_POINTS } from "game/constants";
import { Score } from "game/reducer/types";
import { Input } from "./context/types";

export const determineScore = (bid: Input, winner: Input): Score => {
  const score = {
    [winner.team]: winner.points,
    [winner.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - winner.points,
  };

  if (score[bid.team] < bid.points) {
    score[bid.team] = -bid.points;
  }

  return { they: score.they, us: score.us };
};
