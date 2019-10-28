import React, { useState } from "react";
import { Round, Score } from "components/common/types";
import { Keypad } from "components/keypad";
import { Phase } from "./types";
import { Scoreboard } from "components/scoreboard";
import { determineResult } from "./logic";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("bid");
  const [rounds, setRounds] = useState<Round[]>([]);

  const setBid = (bid: Score): void => {
    const newRound = { bid };
    setRounds([...rounds, newRound]);
  };

  const setResult = (winner: Score): void => {
    const lastGame = last(rounds);
    if (!lastGame) return;
    const { bid } = lastGame;
    if (!bid) return;

    const result = determineResult(bid, winner);
    setRounds([...dropRight(rounds), { ...lastGame, result }]);
  };

  const updateRounds = (score: Score): void => {
    if (phase === "bid") {
      setBid(score);
      setPhase("result");
    } else if (phase === "result") {
      setResult(score);
      setPhase("bid");
    }
  };

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Scoreboard rounds={rounds} />
        <Keypad updateRounds={updateRounds} />
      </div>
    </div>
  );
};
