import { Score, Team } from "shared/types";

export interface Props {
  teams: Team[];
  updateRounds: (score: Score) => void;
}
