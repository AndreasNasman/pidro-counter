import { Team } from "game/reducer/types";

export type TeamTranslation = {
  [T in Team]: string;
};
