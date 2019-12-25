import { Bid, Phase, Score, Winner } from "components/common/types";
import { History } from "./types";
import { MAXIMUM_POINTS } from "components/common/constants";

export const changePhase = (phase: Phase): Phase =>
  phase === "bid" ? "result" : "bid";

const OFFSET = 1;
export const checkRedoPossibility = (
  history: History,
  historyIndex: number
): boolean => {
  const threshold = history.length - OFFSET;
  return historyIndex < threshold;
};

const THRESHOLD = 0;
export const checkResetPossibility = (history: History): boolean => {
  return history.length > THRESHOLD;
};

export const checkUndoPossibility = (historyIndex: number): boolean => {
  return historyIndex > THRESHOLD;
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
