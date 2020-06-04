import { Bid, Game, Phase, Score } from "components/common/types";
import {
  changePhase,
  checkRedoPossibility,
  checkResetPossibility,
  checkUndoPossibility,
  incrementScore
} from "./logic";
import { History } from "./types";
import { produce } from "immer";

interface State {
  canRedo: boolean;
  canReset: boolean;
  canUndo: boolean;
  game: Game;
  history: History;
  historyIndex: number;
  phase: Phase;
}

type Action =
  | { bid: Bid; type: "ADD_BID" }
  | { result: Score; type: "ADD_RESULT" }
  | { type: "CHECK_TOOLBAR" }
  | { type: "RESET" }
  | { step: number; type: "TRAVERSE_HISTORY" }
  | { type: "UPDATE_HISTORY" };

const initialGame = { rounds: [], score: { they: 0, us: 0 } };
export const initialState: State = {
  canRedo: false,
  canReset: false,
  canUndo: false,
  game: initialGame,
  history: [initialGame],
  historyIndex: 0,
  phase: "bid"
};

export const reducer = produce(
  (draft: State, action: Action): State => {
    switch (action.type) {
      case "ADD_BID":
        draft.game.rounds.push({ bid: action.bid });
        draft.phase = changePhase(draft.phase);
        break;
      case "ADD_RESULT":
        draft.game.rounds[draft.game.rounds.length - 1].result = action.result;
        draft.game.score = incrementScore(draft.game.score, action.result);
        draft.phase = changePhase(draft.phase);
        break;
      case "CHECK_TOOLBAR":
        draft.canRedo = checkRedoPossibility(draft.history, draft.historyIndex);
        draft.canReset = checkResetPossibility(draft.history);
        draft.canUndo = checkUndoPossibility(draft.historyIndex);
        break;
      case "RESET":
        return initialState;
      case "TRAVERSE_HISTORY":
        draft.historyIndex += action.step;
        draft.game = draft.history[draft.historyIndex];
        draft.phase = changePhase(draft.phase);
        break;
      case "UPDATE_HISTORY":
        draft.historyIndex += 1;
        draft.history = [
          ...draft.history.slice(0, draft.historyIndex),
          draft.game
        ];
        break;
      default:
        throw new Error();
    }

    return draft;
  }
);
