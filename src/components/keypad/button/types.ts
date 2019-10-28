import { Team } from "components/common";

type Value = Team | number;

export interface Props {
  activeColor: string;
  activeValue: Value | null;
  disabled: boolean;
  handleClick: (value: Value) => void;
  value: Value;
}
