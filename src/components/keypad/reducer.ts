import { Team } from "components/common/types";

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

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DISABLE_BUTTONS":
      return { ...state, disableButtons: false };
    case "RESET":
      return initialState;
    case "SET_ACTIVE_NUMBER":
      return { ...state, activeNumber: action.number };
    case "SET_ACTIVE_TEAM":
      return { ...state, activeTeam: action.team };
    default:
      throw new Error();
  }
};
