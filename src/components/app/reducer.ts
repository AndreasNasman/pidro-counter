import { History, Phase } from "./types";
import {
  changePhase,
  checkRedoPossibility,
  checkUndoPossibility
} from "./logic";
import { Game } from "components/common/types";

interface State {
  canRedo: boolean;
  canUndo: boolean;
  game: Game;
  history: History;
  historyIndex: number;
  phase: Phase;
}

type Action =
  | { step: number; type: "TRAVERSE_HISTORY" }
  | { game: Game; type: "UPDATE_GAME" };

export const initialState: State = {
  canRedo: false,
  canUndo: false,
  game: [],
  history: [[]],
  historyIndex: 0,
  phase: "bid"
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TRAVERSE_HISTORY": {
      const historyIndex = state.historyIndex + action.step;
      return {
        ...state,
        canRedo: checkRedoPossibility(state.history, historyIndex),
        canUndo: checkUndoPossibility(historyIndex),
        game: state.history[historyIndex],
        historyIndex,
        phase: changePhase(state.phase)
      };
    }
    case "UPDATE_GAME": {
      const historyIndex = state.historyIndex + 1;
      const history = [...state.history.slice(0, historyIndex), action.game];
      return {
        ...state,
        canRedo: checkRedoPossibility(history, historyIndex),
        canUndo: checkUndoPossibility(historyIndex),
        game: action.game,
        history,
        historyIndex,
        phase: changePhase(state.phase)
      };
    }
    default:
      throw new Error();
  }
};