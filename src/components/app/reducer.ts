import { Phase } from "./types";
import { Round } from "components/common/types";

interface State {
  canRedo: boolean;
  canUndo: boolean;
  history: Round[][];
  historyIndex: number;
  phase: Phase;
  rounds: Round[];
}

type Action = { type: "TOGGLE_PHASE" };

export const initialState: State = {
  canRedo: false,
  canUndo: false,
  history: [[]],
  historyIndex: 0,
  phase: "bid",
  rounds: []
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_PHASE":
      return { ...state, phase: state.phase === "bid" ? "result" : "bid" };
    default:
      throw new Error();
  }
};
