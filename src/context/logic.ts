import { Score } from "reducers/game/types";
import { MAXIMUM_POINTS } from "../components/common/constants";
import { Input } from "./types";

export const determineScore = (bid: Input, winner: Input): Score => {
  const result = {
    [winner.team]: winner.points,
    [winner.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - winner.points,
  };

  if (result[bid.team] < bid.points) {
    result[bid.team] = -bid.points;
  }

  return { they: result.they, us: result.us };
};
