import { Team } from "reducers/game/types";

export type Value = Team | number;

export interface Props<T extends Value> {
  active: boolean;
  activeColor: string;
  disabled: boolean;
  handleClick: (value: T) => void;
  value: T;
}
