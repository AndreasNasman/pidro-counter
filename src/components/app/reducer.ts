import { Game, Score } from "components/common/types";
import { History, Phase } from "./types";
import {
  changePhase,
  checkRedoPossibility,
  checkUndoPossibility,
  incrementScore
} from "./logic";

interface State {
  canRedo: boolean;
  canUndo: boolean;
  game: Game;
  history: History;
  historyIndex: number;
  phase: Phase;
  score: Score;
}

type Action =
  | { step: number; type: "TRAVERSE_HISTORY" }
  | { game: Game; result?: Score; type: "UPDATE_GAME" };

export const initialState: State = {
  canRedo: false,
  canUndo: false,
  game: [],
  history: [[]],
  historyIndex: 0,
  phase: "bid",
  score: { they: 0, us: 0 }
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
      const step = 1;
      const historyIndex = state.historyIndex + step;
      const start = 0;
      const history = [
        ...state.history.slice(start, historyIndex),
        action.game
      ];
      return {
        ...state,
        canRedo: checkRedoPossibility(history, historyIndex),
        canUndo: checkUndoPossibility(historyIndex),
        game: action.game,
        history,
        historyIndex,
        phase: changePhase(state.phase),
        score: action.result
          ? incrementScore(state.score, action.result)
          : state.score
      };
    }
    default:
      throw new Error();
  }
};
