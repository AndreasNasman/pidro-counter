import { Bid, Game, Score } from "components/common/types";
import { History, Phase } from "./types";
import {
  changePhase,
  checkRedoPossibility,
  checkUndoPossibility,
  incrementScore
} from "./logic";
import { dropRight, last } from "lodash";

interface State {
  canRedo: boolean;
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
  | { step: number; type: "TRAVERSE_HISTORY" }
  | { type: "UPDATE_HISTORY" };

const initialGame = { rounds: [], score: { they: 0, us: 0 } };
export const initialState: State = {
  canRedo: false,
  canUndo: false,
  game: initialGame,
  history: [initialGame],
  historyIndex: 0,
  phase: "bid"
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_BID":
      return {
        ...state,
        game: {
          ...state.game,
          rounds: [...state.game.rounds, { bid: action.bid }]
        },
        phase: "result"
      };
    case "ADD_RESULT": {
      return {
        ...state,
        game: {
          rounds: [
            ...dropRight(state.game.rounds),
            { ...last(state.game.rounds), result: action.result }
          ],
          score: incrementScore(state.game.score, action.result)
        },
        phase: "bid"
      };
    }
    case "CHECK_TOOLBAR":
      return {
        ...state,
        canRedo: checkRedoPossibility(state.history, state.historyIndex),
        canUndo: checkUndoPossibility(state.historyIndex)
      };
    case "TRAVERSE_HISTORY": {
      const historyIndex = state.historyIndex + action.step;
      return {
        ...state,
        game: state.history[historyIndex],
        historyIndex,
        phase: changePhase(state.phase)
      };
    }
    case "UPDATE_HISTORY": {
      const step = 1;
      const historyIndex = state.historyIndex + step;
      return {
        ...state,
        history: [
          ...dropRight(state.history, state.history.length - historyIndex),
          state.game
        ],
        historyIndex
      };
    }
    default:
      throw new Error();
  }
};
