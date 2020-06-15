import { MAXIMUM_POINTS } from "./constants";
import { Input } from "./context/types";
import { Bid, Score } from "./reducer/types";

export const determineScore = (bid: Bid, winner: Input): Score => {
  const score = {
    [winner.team]: winner.points,
    [winner.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - winner.points,
  };

  if (score[bid.team] < bid.points) {
    score[bid.team] = -bid.points;
  }

  return { they: score.they, us: score.us };
};
