import { Phase } from "components/common/types";

export interface Props {
  phase: Phase;
  round: number;
}

export type Questions = { [T in Phase]: string };
