import { MutableRefObject } from "react";
import { Result } from "components/common";

export interface Props {
  headRef: MutableRefObject<HTMLDivElement | null>;
  score: Result;
}
