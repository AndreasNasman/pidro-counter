import { IResult, Phases, Team } from '../app/types';

export interface IProps {
  phase: Phases;
  teams: Team[];
  winner?: IResult;
  updateSet(result: IResult): void;
}

export interface IButton {
  active: boolean;
  activeColor: string;
}

export interface IPrompt {
  minWidth: string;
}
