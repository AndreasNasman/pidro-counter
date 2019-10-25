import { Score, Team } from "types";

export interface Props {
  teams: Team[];
  updateRounds: (score: Score) => void;
}
