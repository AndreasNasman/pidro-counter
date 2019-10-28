import { Round, Team } from "shared/types";
import { MutableRefObject } from "react";

export interface Props {
  bodyColumnRef: MutableRefObject<HTMLDivElement | null>;
  rounds: Round[];
  teams: Team[];
}
