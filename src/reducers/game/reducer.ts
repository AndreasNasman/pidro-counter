import { produce } from "immer";
import { initialState } from "./initialState";
import { Action, State } from "./types";

export const reducer = produce(
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  (draft: State, action: Action): State => {
    switch (action.type) {
      case "ADD_BID":
        draft.game.push({ bid: action.payload });
        break;
      case "ADD_SCORE":
        draft.game[draft.game.length - 1].score = action.payload;
        break;
      case "RESET":
        return initialState;
      default:
        throw new Error("Unknown action type");
    }

    return draft;
  }
);
