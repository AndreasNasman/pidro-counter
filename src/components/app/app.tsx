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
import { IGame, IResult, ISet, Phases, Score, Team } from './types';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState<Team[]>(['vi', 'de']);

  const getInitialGame: () => IGame = (): IGame => {
    const initialScore: Score = teams.reduce(
      (score: Score, team: Team) => {
        score[team] = 0;

        return score;
      },
      {} as Score, // tslint:disable-line: no-object-literal-type-assertion
    );

    return { score: initialScore, sets: [] };
  };
  const [game, setGame] = useState<IGame>(() => {
    const storedGame: string | null = localStorage.getItem('game');
    if (storedGame !== null) {
      return JSON.parse(storedGame) as IGame;
    }

    return getInitialGame();
  });
  const currentSet: ISet | undefined = last(game.sets);

  const getNextPhase: () => Phases = (): Phases => {
    if (currentSet && !currentSet.score) {
      return Phases.Score;
    }

    return Phases.Bidding;
  };
  const [phase, setPhase] = useState(getNextPhase);

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
    setPhase(getNextPhase);
    localStorage.setItem('game', JSON.stringify(game));
  }, [game]);

  useEffect(() => {
    localStorage.setItem('redoHistory', JSON.stringify(redoHistory));
  }, [redoHistory]);

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    const nextRound: number = currentSet ? currentSet.round + 1 : 1;
    setGame({ ...game, sets: [...game.sets, { bid, round: nextRound }] });

    if (redoHistory.length > 0) {
      setRedoHistory([]);
    }
  };

  const updateScore: (winner: IResult) => void = (winner: IResult): void => {
    if (!currentSet) return;
    const { bid } = currentSet;
    const { points: biddingPoints, team: biddingTeam } = bid;

    const setScore: Score = teams.reduce(
      (score: Score, team: Team) => {
        score[team] =
          team === winner.team ? winner.points : MAXIMUM_POINTS - winner.points;

        if (team === biddingTeam && score[team] < biddingPoints) {
          score[team] = -biddingPoints;
        }

        return score;
      },
      {} as Score, // tslint:disable-line: no-object-literal-type-assertion
    );

    const totalScore: Score = teams.reduce(
      (score: Score, team: Team) => {
        score[team] = game.score[team] + setScore[team];

        return score;
      },
      {} as Score, // tslint:disable-line: no-object-literal-type-assertion
    );

    setGame({
      ...game,
      score: totalScore,
      sets: [...game.sets.slice(0, -1), { ...currentSet, score: setScore }],
    });

    if (redoHistory.length > 0) {
      setRedoHistory([]);
    }
  };

  const undo: () => void = (): void => {
    if (!currentSet) return;

    if (phase === Phases.Bidding) {
      setGame({
        ...game,
        sets: [...game.sets.slice(0, -1), { ...currentSet, score: undefined }],
      });
    } else if (phase === Phases.Score) {
      setGame({ ...game, sets: [...game.sets.slice(0, -1)] });
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

  const updateSet: (result: IResult) => void =
    phase === Phases.Bidding ? updateBid : updateScore;

  const canRedo: boolean = redoHistory.length > 0;
  const canUndo: boolean = game.sets.length > 0;

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Grid>
          <Scoreboard game={game} teams={teams} />
          <Toolbar
            canRedo={canRedo}
            canUndo={canUndo}
            redo={redo}
            resetScore={resetScore}
            undo={undo}
          />
          <Keypad phase={phase} teams={teams} updateSet={updateSet} />
        </Grid>
      </Felt>
    </>
  );
};
