import { Score } from "types";

export type Phase = "bid" | "result";
export interface Round {
  bid?: Score;
  winner?: Score;
}
