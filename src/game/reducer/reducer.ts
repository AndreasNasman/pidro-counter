import { produce } from "immer";
import { initialState } from "./initialState";
import { Action, State } from "./types";

export const reducer = produce(
  (draft: State, action: Action): State => {
    switch (action.type) {
      case "ADD_BID":
        draft.game.push({ bid: action.payload });
        draft.phase = "score";
        break;
      case "ADD_SCORE":
        draft.game[draft.game.length - 1].score = action.payload;
        draft.phase = "bid";
        draft.round += 1;
        draft.totalScore.they += action.payload.they;
        draft.totalScore.us += action.payload.us;
        break;
      case "RESET":
        return initialState;
      default:
        throw new Error("Unknown action type");
    }

    return draft;
  }
);
