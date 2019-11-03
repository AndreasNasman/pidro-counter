import { Bid, Winner } from "components/common/types";

export interface Props {
  updateGame: (input: Bid | Winner) => void;
}
