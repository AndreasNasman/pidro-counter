import { Result, Team } from "shared/types";
import { MutableRefObject } from "react";

export interface Props {
  headRef: MutableRefObject<HTMLDivElement | null>;
  score: Result;
  teams: Team[];
}
