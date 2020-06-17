import classNames from "classnames";
import { TEAMS } from "game/constants";
import { useGameContext } from "game/context/GameContext";
import React, { FC } from "react";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Foot: FC<Props> = ({ cellRef, footRef }: Props) => {
  const { totalScore, winner } = useGameContext().state;

  return (
    <div className={styles.foot} ref={footRef}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: team === TEAMS[TEAMS.length - 1],
            })}
            ref={cellRef}
          >
            <div className={styles.content}>{totalScore[team]}</div>
            {team === winner && (
              <span aria-label="Trophy" className={styles.emoji} role="img">
                🏆
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
