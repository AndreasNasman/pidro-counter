import React, { useEffect, useState } from "react";
import { Round, Score } from "components/common/types";
import { Keypad } from "components/keypad";
import { Phase } from "./types";
import { Scoreboard } from "components/scoreboard";
import { Toolbar } from "components/toolbar";
import { determineResult } from "./logic";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("bid");
  const [rounds, setRounds] = useState<Round[]>([]);
  const [history, setHistory] = useState<Round[][]>([rounds]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const updateHistory = (updatedRounds: Round[]): void => {
    const updatedHistoryIndex = historyIndex + 1;
    setHistory([...history.slice(0, updatedHistoryIndex), updatedRounds]);
    setHistoryIndex(updatedHistoryIndex);
  };

  const setBid = (bid: Score): void => {
    const updatedRounds = [...rounds, { bid }];
    setRounds(updatedRounds);

    updateHistory(updatedRounds);
  };

  const setResult = (winner: Score): void => {
    const lastGame = last(rounds);
    if (!lastGame) return;
    const { bid } = lastGame;
    if (!bid) return;

    const result = determineResult(bid, winner);
    const updatedRounds = [...dropRight(rounds), { ...lastGame, result }];
    setRounds(updatedRounds);

    updateHistory(updatedRounds);
  };

  const updatePhase = (): void => {
    setPhase(phase === "bid" ? "result" : "bid");
  };

  const updateRounds = (score: Score): void => {
    if (phase === "bid") {
      setBid(score);
      updatePhase();
    } else if (phase === "result") {
      setResult(score);
      updatePhase();
    }
  };

  const undo = (): void => {
    const previousHistoryIndex = historyIndex - 1;
    setRounds(history[previousHistoryIndex]);
    updatePhase();
    setHistoryIndex(previousHistoryIndex);
  };

  const redo = (): void => {
    const nextHistoryIndex = historyIndex + 1;
    setRounds(history[nextHistoryIndex]);
    updatePhase();
    setHistoryIndex(nextHistoryIndex);
  };

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  useEffect(() => {
    if (historyIndex === 0) setCanUndo(false);
    else setCanUndo(true);

    if (historyIndex < history.length - 1) setCanRedo(true);
    else setCanRedo(false);
  }, [historyIndex, history.length]);

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Scoreboard rounds={rounds} />
        <Toolbar canRedo={canRedo} canUndo={canUndo} redo={redo} undo={undo} />
        <Keypad updateRounds={updateRounds} />
      </div>
    </div>
  );
};
