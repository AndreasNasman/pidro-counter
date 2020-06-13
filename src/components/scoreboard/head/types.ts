import { MutableRefObject } from "react";
import { Score } from "reducers/game/types";

export interface Props {
  headRef: MutableRefObject<HTMLDivElement | null>;
  score: Score;
}
