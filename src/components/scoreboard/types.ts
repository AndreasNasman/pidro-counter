import { IGame } from '../app/types';

export interface IProps {
  game: IGame;
}

export interface ICell {
  reverse?: boolean;
}

export interface ITable {
  scoreboardMinHeight: string;
}
