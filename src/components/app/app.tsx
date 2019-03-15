import last from 'lodash.last';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MAXIMUM_POINTS, WINNING_POINTS } from '../../constants/game';
import { ITEMS } from '../../constants/local-storage';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Toolbar } from '../toolbar';
import { Felt, GlobalStyle, Grid } from './styles';
import { IGame, IResult, ISet, Phases, Score, Team } from './types';

const INITIAL_GAME: () => IGame = (): IGame => {
  const teams: Team[] = ['vi', 'de'];
  const initialScore: Score = teams.map((team: Team) => ({ points: 0, team }));

  return { phase: Phases.Bidding, score: initialScore, sets: [], teams };
};
const INITIAL_GAME_HISTORY_INDEX: number = 0;

const initializeFromLocalStorage: (
  item: string,
  fallback: unknown,
) => unknown = (item: string, fallback: unknown): unknown => {
  const storedItem: string | null = localStorage.getItem(item);
  if (storedItem !== null) {
    return JSON.parse(storedItem);
  }

  return fallback;
};

export const App: FunctionComponent = (): ReactElement => {
  const [game, setGame] = useState(initializeFromLocalStorage(
    ITEMS.GAME,
    INITIAL_GAME(),
  ) as IGame);

  const [gameHistory, setGameHistory] = useState(initializeFromLocalStorage(
    ITEMS.GAME_HISTORY,
    [INITIAL_GAME()],
  ) as IGame[]);
  const [gameHistoryIndex, setGameHistoryIndex] = useState(
    initializeFromLocalStorage(
      ITEMS.GAME_HISTORY_INDEX,
      INITIAL_GAME_HISTORY_INDEX,
    ) as number,
  );

  useEffect(() => {
    localStorage.setItem(ITEMS.GAME, JSON.stringify(game));
  }, [game]);

  useEffect(() => {
    localStorage.setItem(ITEMS.GAME_HISTORY, JSON.stringify(gameHistory));
  }, [gameHistory]);

  useEffect(() => {
    localStorage.setItem(
      ITEMS.GAME_HISTORY_INDEX,
      JSON.stringify(gameHistoryIndex),
    );
  }, [gameHistoryIndex]);

  const getNextPhase: () => Phases = (): Phases =>
    game.phase === Phases.Bidding ? Phases.Score : Phases.Bidding;

  const updateGameHistory: (updatedGame: IGame) => void = (
    updatedGame: IGame,
  ): void => {
    const nextGameHistoryIndex: number = gameHistoryIndex + 1;
    setGameHistory([
      ...gameHistory.slice(0, nextGameHistoryIndex),
      updatedGame,
    ]);
    setGameHistoryIndex(nextGameHistoryIndex);
  };

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    const currentSet: ISet | undefined = last(game.sets);
    const nextRound: number = currentSet ? currentSet.round + 1 : 1;

    const updatedGame: IGame = {
      ...game,
      phase: getNextPhase(),
      sets: [...game.sets, { bid, round: nextRound }],
    };

    setGame(updatedGame);
    updateGameHistory(updatedGame);
  };

  const updateScore: (setWinner: IResult) => void = (
    setWinner: IResult,
  ): void => {
    const currentSet: ISet | undefined = last(game.sets);
    if (!currentSet) return;
    const { bid } = currentSet;
    const { points: biddingPoints, team: biddingTeam } = bid;

    const setScore: Score = game.teams.map((team: Team) => {
      let points: number =
        team === setWinner.team
          ? setWinner.points
          : MAXIMUM_POINTS - setWinner.points;

      if (team === biddingTeam && points < biddingPoints) {
        points = -biddingPoints;
      }

      return { points, team };
    });

    const gameScore: Score = game.teams.map((team: Team, index: number) => ({
      points: game.score[index].points + setScore[index].points,
      team,
    }));

    let winner: IResult | undefined = gameScore.find(
      (teamScore: IResult) =>
        teamScore.team === bid.team && teamScore.points >= WINNING_POINTS,
    );
    if (!winner) {
      winner = gameScore.find(
        (teamScore: IResult) => teamScore.points >= WINNING_POINTS,
      );
    }

    let leader: Team | undefined;
    if (!winner) {
      const [ourScore, theirScore] = gameScore;

      if (ourScore.points > theirScore.points) leader = ourScore.team;
      if (theirScore.points > ourScore.points) leader = theirScore.team;
    }

    const updatedGame: IGame = {
      ...game,
      leader,
      phase: getNextPhase(),
      score: gameScore,
      sets: [...game.sets.slice(0, -1), { ...currentSet, score: setScore }],
      winner,
    };

    setGame(updatedGame);
    updateGameHistory(updatedGame);
  };

  const updateSet: (result: IResult) => void =
    game.phase === Phases.Bidding ? updateBid : updateScore;

  const undo: () => void = (): void => {
    const nextGameHistoryIndex: number = gameHistoryIndex - 1;
    setGame(gameHistory[nextGameHistoryIndex]);
    setGameHistoryIndex(nextGameHistoryIndex);
  };

  const redo: () => void = (): void => {
    const nextGameHistoryIndex: number = gameHistoryIndex + 1;
    setGame(gameHistory[nextGameHistoryIndex]);
    setGameHistoryIndex(nextGameHistoryIndex);
  };

  const resetScore: () => void = (): void => {
    setGame(INITIAL_GAME());
    setGameHistory([INITIAL_GAME()]);
    setGameHistoryIndex(INITIAL_GAME_HISTORY_INDEX);
  };

  const canUndo: boolean = gameHistoryIndex > 0;
  const canRedo: boolean = gameHistoryIndex < gameHistory.length - 1;
  const canResetScore: boolean = gameHistory.length > 1;

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Grid>
          <Scoreboard game={game} />
          <Toolbar
            canRedo={canRedo}
            canResetScore={canResetScore}
            canUndo={canUndo}
            redo={redo}
            resetScore={resetScore}
            undo={undo}
          />
          <Keypad phase={game.phase} teams={game.teams} updateSet={updateSet} />
        </Grid>
      </Felt>
    </>
  );
};
