import classNames from "classnames";
import { TEAMS } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC } from "react";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Head: FC<Props> = ({ headRef }: Props) => {
  const { totalScore } = useGameContext().state;

  let leader: string | null = null;
  if (totalScore.us > totalScore.they) leader = "us";
  else if (totalScore.they > totalScore.us) leader = "they";

  return (
    <div className={styles.head} ref={headRef}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: TEAMS[TEAMS.length - 1] === team,
            })}
          >
            <div className={styles.content}>VI</div>
            {leader === team && (
              <span
                aria-label="Chequered Flag"
                className={styles.emoji}
                role="img"
              >
                🏁
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
