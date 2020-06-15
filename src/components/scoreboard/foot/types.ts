import { MutableRefObject } from "react";

export interface Props {
  cellRef: MutableRefObject<HTMLDivElement | null>;
  footRef: MutableRefObject<HTMLDivElement | null>;
}
