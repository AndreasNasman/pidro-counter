import { Phase, Round } from "./types";
import React, { useState } from "react";
import { Keypad } from "components/keypad";
import { Score } from "types";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [phase, setPhase] = useState<Phase>("bid");

  const updateRounds = (score: Score): void => {
    if (phase === "bid") {
      const newRound = { bid: score };
      setRounds([...rounds, newRound]);
      setPhase("result");
    } else if (phase === "result") {
      const updatedRound = { ...last(rounds), winner: score };
      setRounds([...dropRight(rounds), updatedRound]);
      setPhase("bid");
    }
  };

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Keypad updateRounds={updateRounds} />
      </div>
    </div>
  );
};
