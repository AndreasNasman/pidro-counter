import last from 'lodash.last';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MAXIMUM_POINTS, WINNING_POINTS } from '../../constants/game';
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

export const App: FunctionComponent = (): ReactElement => {
  const [game, setGame] = useState(() => {
    const storedGame: string | null = localStorage.getItem('game');
    if (storedGame !== null) {
      return JSON.parse(storedGame) as IGame;
    }

    return INITIAL_GAME();
  });

  const [gameHistory, setGameHistory] = useState(() => {
    const storedGameHistory: string | null = localStorage.getItem(
      'gameHistory',
    );
    if (storedGameHistory !== null) {
      return JSON.parse(storedGameHistory) as IGame[];
    }

    return [INITIAL_GAME()];
  });
  const [gameHistoryIndex, setGameHistoryIndex] = useState(() => {
    const storedGameHistoryIndex: string | null = localStorage.getItem(
      'gameHistoryIndex',
    );
    if (storedGameHistoryIndex !== null) {
      return JSON.parse(storedGameHistoryIndex) as number;
    }

    return INITIAL_GAME_HISTORY_INDEX;
  });

  useEffect(() => {
    localStorage.setItem('game', JSON.stringify(game));
  }, [game]);

  useEffect(() => {
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
  }, [gameHistory]);

  useEffect(() => {
    localStorage.setItem('gameHistoryIndex', JSON.stringify(gameHistoryIndex));
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
