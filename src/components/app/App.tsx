import { Game, Score } from "components/common/types";
import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Keypad } from "components/keypad";
import { Scoreboard } from "components/scoreboard";
import { Toolbar } from "components/toolbar";
import { determineResult } from "./logic";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const [{ canRedo, canUndo, game, phase }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const updateGame = (score: Score): void => {
    let updatedGame: Game = [];
    if (phase === "bid") {
      updatedGame = [...game, { bid: score }];
    } else if (phase === "result") {
      const lastGame = last(game);
      if (!lastGame) return;
      const { bid } = lastGame;
      if (!bid) return;

      const result = determineResult(bid, score);
      updatedGame = [...dropRight(game), { ...lastGame, result }];
    }

    dispatch({ game: updatedGame, type: "UPDATE_GAME" });
  };

  const redo = (): void => {
    const step = 1;
    dispatch({ step, type: "TRAVERSE_HISTORY" });
  };

  const undo = (): void => {
    const step = -1;
    dispatch({ step, type: "TRAVERSE_HISTORY" });
  };

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Scoreboard game={game} />
        <Toolbar canRedo={canRedo} canUndo={canUndo} redo={redo} undo={undo} />
        <Keypad updateGame={updateGame} />
      </div>
    </div>
  );
};
