import { MutableRefObject } from "react";
import { Score } from "components/common/types";

export interface Props {
  headRef: MutableRefObject<HTMLDivElement | null>;
  score: Score;
}
