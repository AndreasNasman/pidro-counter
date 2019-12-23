import { Phase } from "components/common/types";

export interface Props {
  phase: Phase;
}

export type Questions = { [key in Phase]: string };
