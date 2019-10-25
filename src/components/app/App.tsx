import { Phase, Result, Round, Score, Team } from "shared/types";
import React, { useState } from "react";
import { Keypad } from "components/keypad";
import { MAXIMUM_POINTS } from "shared/constants";
import dropRight from "lodash.dropright";
import last from "lodash.last";
import styles from "./App.module.css";

const determineResult = (bid: Score, winner: Score): Result => {
  const loser: Score = {
    points: MAXIMUM_POINTS - winner.points,
    team: winner.team === "us" ? "they" : "us"
  };

  if (loser.team === bid.team && loser.points < bid.points) {
    loser.points = -bid.points;
  }

  return {
    loser,
    winner
  };
};

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

  const [teams] = useState<Team[]>(["us", "they"]);

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Keypad teams={teams} updateRounds={updateRounds} />
      </div>
    </div>
  );
};
