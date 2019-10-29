import { MutableRefObject } from "react";
import { Result } from "components/common/types";

export interface Props {
  headRef: MutableRefObject<HTMLDivElement | null>;
  score: Result;
}
