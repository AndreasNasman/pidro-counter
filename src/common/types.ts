import { Team } from "reducers/game/types";

export type TeamTranslation = {
  [T in Team]: string;
};
