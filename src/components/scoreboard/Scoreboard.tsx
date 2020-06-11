/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { TEAMS } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC } from "react";
import { Round, Team } from "reducers/game/types";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC = () => {
  // Leader, reverse, refs, keys, winner, lagnamn
  const { state } = useGameContext();
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        {TEAMS.map((team: Team) => (
          <div className={styles.column} key={team}>
            <div className={styles.cell}>
              <div className={styles.content}>VI</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.body}>
        {TEAMS.map((team: Team) => (
          <div className={styles.column} key={team}>
            {state.game.map((round: Round) => (
              <div className={styles.cell} key={JSON.stringify(round)}>
                {typeof round.score === "undefined" &&
                  round.bid.team === team && (
                    <div className={styles.content}>({round.bid.points})</div>
                  )}

                {typeof round.score !== "undefined" && (
                  <div className={styles.content}>{round.score[team]}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.foot}>
        {TEAMS.map((team: Team) => (
          <div className={styles.column} key={team}>
            <div className={styles.cell}>
              <div className={styles.content}>{state.score[team]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
