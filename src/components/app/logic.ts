import { MAXIMUM_POINTS, Result, Score } from "components/common";

export const determineResult = (bid: Score, winner: Score): Result => {
  const result = {
    [winner.team]: winner.points,
    [winner.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - winner.points
  };

  if (result[bid.team] < bid.points) {
    result[bid.team] = -bid.points;
  }

  return { they: result.they, us: result.us };
};
