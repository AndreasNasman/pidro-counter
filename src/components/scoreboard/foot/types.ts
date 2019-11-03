import { MutableRefObject } from "react";
import { Score } from "components/common/types";

export interface Props {
  footCellRef: MutableRefObject<HTMLDivElement | null>;
  footRef: MutableRefObject<HTMLDivElement | null>;
  score: Score;
}
