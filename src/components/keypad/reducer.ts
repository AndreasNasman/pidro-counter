import { Team } from "components/common/types";
import { produce } from "immer";

interface State {
  activeNumber: number | null;
  activeTeam: Team | null;
  disableButtons: boolean;
}

type Action =
  | { type: "DISABLE_BUTTONS" }
  | { type: "RESET" }
  | { number: number | null; type: "SET_ACTIVE_NUMBER" }
  | { team: Team | null; type: "SET_ACTIVE_TEAM" };

export const initialState: State = {
  activeNumber: null,
  activeTeam: null,
  disableButtons: false
};

export const reducer = produce(
  (draft: State, action: Action): State => {
    switch (action.type) {
      case "DISABLE_BUTTONS":
        draft.disableButtons = true;
        break;
      case "RESET":
        return initialState;
      case "SET_ACTIVE_NUMBER":
        draft.activeNumber =
          action.number === draft.activeNumber ? null : action.number;
        break;
      case "SET_ACTIVE_TEAM":
        draft.activeTeam =
          action.team === draft.activeTeam ? null : action.team;
        break;
      default:
        throw new Error();
    }

    return draft;
  }
);
