import React, { useReducer, useState } from "react";
import { Round, Score } from "components/common/types";
import { initialState, reducer } from "./reducer";
import { Keypad } from "components/keypad";
import { Scoreboard } from "components/scoreboard";
import { Toolbar } from "components/toolbar";
import { determineResult } from "./logic";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const [{ phase }, dispatch] = useReducer(reducer, initialState);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [history, setHistory] = useState<Round[][]>([rounds]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const determineUndoRedo = (
    updatedHistory: Round[][],
    updatedHistoryIndex: number
  ): void => {
    if (updatedHistoryIndex === 0) setCanUndo(false);
    else setCanUndo(true);

    if (updatedHistoryIndex < updatedHistory.length - 1) setCanRedo(true);
    else setCanRedo(false);
  };

  const updateRounds = (score: Score): void => {
    let updatedRounds: Round[] = [];
    if (phase === "bid") {
      updatedRounds = [...rounds, { bid: score }];
    } else if (phase === "result") {
      const lastGame = last(rounds);
      if (!lastGame) return;
      const { bid } = lastGame;
      if (!bid) return;

      const result = determineResult(bid, score);
      updatedRounds = [...dropRight(rounds), { ...lastGame, result }];
    }

    setRounds(updatedRounds);

    dispatch({ type: "TOGGLE_PHASE" });

    const updatedHistoryIndex = historyIndex + 1;
    const updatedHistory = [
      ...history.slice(0, updatedHistoryIndex),
      updatedRounds
    ];

    setHistory(updatedHistory);
    setHistoryIndex(updatedHistoryIndex);
    determineUndoRedo(updatedHistory, updatedHistoryIndex);
  };

  const undoRedo = (step: number): void => {
    const nextHistoryIndex = historyIndex + step;
    setRounds(history[nextHistoryIndex]);

    dispatch({ type: "TOGGLE_PHASE" });

    setHistoryIndex(nextHistoryIndex);
    determineUndoRedo(history, nextHistoryIndex);
  };

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Scoreboard rounds={rounds} />
        <Toolbar canRedo={canRedo} canUndo={canUndo} undoRedo={undoRedo} />
        <Keypad updateRounds={updateRounds} />
      </div>
    </div>
  );
};
