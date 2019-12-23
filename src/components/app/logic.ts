import { Bid, Phase, Score, Winner } from "components/common/types";
import { History } from "./types";
import { MAXIMUM_POINTS } from "components/common/constants";

export const changePhase = (phase: Phase): Phase =>
  phase === "bid" ? "result" : "bid";

export const checkRedoPossibility = (
  history: History,
  historyIndex: number
): boolean => {
  const offset = 1;
  const threshold = history.length - offset;
  return historyIndex < threshold;
};

export const checkResetPossibility = (history: History): boolean => {
  const threshold = 0;
  return history.length > threshold;
};

export const checkUndoPossibility = (historyIndex: number): boolean => {
  const threshold = 0;
  return historyIndex > threshold;
};

export const determineResult = (bid: Bid, winner: Winner): Score => {
  const result = {
    [winner.team]: winner.points,
    [winner.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - winner.points
  };

  if (result[bid.team] < bid.points) {
    result[bid.team] = -bid.points;
  }

  return { they: result.they, us: result.us };
};

export const incrementScore = (score: Score, result: Score): Score => ({
  they: score.they + result.they,
  us: score.us + result.us
});
