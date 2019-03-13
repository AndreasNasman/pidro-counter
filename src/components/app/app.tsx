import last from 'lodash.last';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MAXIMUM_POINTS } from '../../constants/game';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Toolbar } from '../toolbar';
import { Felt, GlobalStyle, Grid } from './styles';
import { IGame, IResult, ISet, Leader, Phases, Score, Team } from './types';

const getInitialGame: () => IGame = (): IGame => {
  const teams: Team[] = ['vi', 'de'];
  const initialScore: Score = teams.map((team: Team) => ({ points: 0, team }));

  return { phase: Phases.Bidding, score: initialScore, sets: [], teams };
};

export const App: FunctionComponent = (): ReactElement => {
  const [game, setGame] = useState<IGame>(() => {
    const storedGame: string | null = localStorage.getItem('game');
    if (storedGame !== null) {
      return JSON.parse(storedGame) as IGame;
    }

    return getInitialGame();
  });

  const [redoHistory, setRedoHistory] = useState<IGame[] | []>(() => {
    const storedRedoHistory: string | null = localStorage.getItem(
      'redoHistory',
    );
    if (storedRedoHistory !== null) {
      return JSON.parse(storedRedoHistory) as IGame[];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('game', JSON.stringify(game));
  }, [game]);

  useEffect(() => {
    localStorage.setItem('redoHistory', JSON.stringify(redoHistory));
  }, [redoHistory]);

  const currentSet: ISet | undefined = last(game.sets);

  const getNextPhase: () => Phases = (): Phases =>
    game.phase === Phases.Bidding ? Phases.Score : Phases.Bidding;

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    const nextRound: number = currentSet ? currentSet.round + 1 : 1;

    setGame({
      ...game,
      phase: getNextPhase(),
      sets: [...game.sets, { bid, round: nextRound }],
    });

    if (redoHistory.length > 0) {
      setRedoHistory([]);
    }
  };

  const getLeader: (totalScore: Score) => Leader = (
    totalScore: Score,
  ): Leader => {
    const [ourScore, theirScore] = totalScore;

    if (ourScore.points > theirScore.points) return ourScore.team;
    if (theirScore.points > ourScore.points) return theirScore.team;
  };

  const updateScore: (winner: IResult) => void = (winner: IResult): void => {
    if (!currentSet) return;
    const { bid } = currentSet;
    const { points: biddingPoints, team: biddingTeam } = bid;

    const setScore: Score = game.teams.map((team: Team) => {
      let points: number =
        team === winner.team ? winner.points : MAXIMUM_POINTS - winner.points;

      if (team === biddingTeam && points < biddingPoints) {
        points = -biddingPoints;
      }

      return { points, team };
    });

    const gameScore: Score = game.teams.map((team: Team, index: number) => ({
      points: game.score[index].points + setScore[index].points,
      team,
    }));

    const leader: Leader = getLeader(gameScore);

    setGame({
      ...game,
      leader,
      phase: getNextPhase(),
      score: gameScore,
      sets: [...game.sets.slice(0, -1), { ...currentSet, score: setScore }],
    });

    if (redoHistory.length > 0) {
      setRedoHistory([]);
    }
  };

  const updateSet: (result: IResult) => void =
    game.phase === Phases.Bidding ? updateBid : updateScore;

  const undo: () => void = (): void => {
    if (!currentSet) return;

    if (game.phase === Phases.Bidding) {
      setGame({
        ...game,
        phase: getNextPhase(),
        sets: [...game.sets.slice(0, -1), { ...currentSet, score: undefined }],
      });
    } else if (game.phase === Phases.Score) {
      setGame({
        ...game,
        phase: getNextPhase(),
        sets: [...game.sets.slice(0, -1)],
      });
    }

    setRedoHistory([...redoHistory, game]);
  };

  const redo: () => void = (): void => {
    const nextGameState: IGame | undefined = last(redoHistory);
    if (!nextGameState) return;

    setGame(nextGameState);
    setRedoHistory(redoHistory.slice(0, -1));
  };

  const resetScore: () => void = (): void => {
    setGame(getInitialGame());

    if (redoHistory.length > 0) {
      setRedoHistory([]);
    }
  };

  const canUndo: boolean = game.sets.length > 0;
  const canRedo: boolean = redoHistory.length > 0;

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Grid>
          <Scoreboard game={game} />
          <Toolbar
            canRedo={canRedo}
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
