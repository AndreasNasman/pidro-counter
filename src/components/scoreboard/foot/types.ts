import { Result, Team } from "shared/types";
import { MutableRefObject } from "react";

export interface Props {
  footCellRef: MutableRefObject<HTMLDivElement | null>;
  footRef: MutableRefObject<HTMLDivElement | null>;
  score: Result;
  teams: Team[];
}
