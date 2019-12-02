import { Bid, Winner } from "components/common/types";

export interface Props {
  updateRound: (input: Bid | Winner) => void;
}
