import { Team } from "game/reducer/types";
import { TeamTranslation } from "./types";

export const MAXIMUM_POINTS = 14;
export const MINIMUM_POINTS = 6;
export const WINNING_POINTS = 62;

export const TEAMS: Team[] = ["us", "they"];
export const TEAM_TRANSLATION: TeamTranslation = {
  they: "de",
  us: "vi",
};
