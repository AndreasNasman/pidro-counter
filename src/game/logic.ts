import { MAXIMUM_POINTS, WINNING_POINTS } from "./constants";
import { Input } from "./context/types";
import { Bid, Score, Winner } from "./reducer/types";

export const determineScore = (bid: Bid, input: Input): Score => {
  const score = {
    [input.team]: input.points,
    [input.team === "us" ? "they" : "us"]: MAXIMUM_POINTS - input.points,
  };

  if (score[bid.team] < bid.points) {
    score[bid.team] = -bid.points;
  }

  return { they: score.they, us: score.us };
};

export const determineWinner = (bid: Bid, totalScore: Score): Winner => {
  const nonBiddingTeam = bid.team === "us" ? "they" : "us";

  if (totalScore[bid.team] > WINNING_POINTS) return bid.team;
  else if (totalScore[nonBiddingTeam] > WINNING_POINTS) return nonBiddingTeam;

  return null;
};
