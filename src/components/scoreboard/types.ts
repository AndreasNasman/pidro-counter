import { IGame, Team } from '../app/types';

export interface IProps {
  game: IGame;
  teams: Team[];
}

export interface ITable {
  scoreboardMinHeight: string;
}
