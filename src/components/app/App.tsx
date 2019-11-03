import { Bid, Winner } from "components/common/types";
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

  const updateBid = (bid: Bid): void => {
    const updatedGame = [...game, { bid }];
    dispatch({ game: updatedGame, type: "UPDATE_GAME" });
  };

  const updateResult = (winner: Winner): void => {
    const lastGame = last(game);
    if (!lastGame) return;
    const { bid } = lastGame;
    if (!bid) return;

    const result = determineResult(bid, winner);
    const updatedGame = [...dropRight(game), { ...lastGame, result }];
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
        <Keypad updateGame={phase === "bid" ? updateBid : updateResult} />
      </div>
    </div>
  );
};
