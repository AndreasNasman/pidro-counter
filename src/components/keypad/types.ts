import { Bid, Game, Phase, Winner } from "components/common/types";

export interface Props {
  addBid: (bid: Bid) => void;
  addResult: (winner: Winner) => void;
  game: Game;
  phase: Phase;
}
