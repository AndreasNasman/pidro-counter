import { Phase } from "components/common/types";

export interface Props {
  phase: Phase;
}

export type Questions = { [T in Phase]: string };
