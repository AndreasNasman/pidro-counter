import { MutableRefObject } from "react";

export interface Props {
  footCellRef: MutableRefObject<HTMLDivElement | null>;
  footRef: MutableRefObject<HTMLDivElement | null>;
}
