import { Team } from "components/common/types";

export type Value = Team | number;
export type Props<T extends Value> = {
  active: boolean;
  activeColor: string;
  disabled: boolean;
  handleClick: (value: T) => void;
  value: T;
};
