import { Score } from "types";

export interface Round {
  bid?: Score;
  winner?: Score;
}

export type Phase = "bid" | "result";
