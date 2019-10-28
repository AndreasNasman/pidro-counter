import { MutableRefObject } from "react";
import { Result } from "components/common";

export interface Props {
  footCellRef: MutableRefObject<HTMLDivElement | null>;
  footRef: MutableRefObject<HTMLDivElement | null>;
  score: Result;
}
