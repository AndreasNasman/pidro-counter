import classNames from "classnames";
import { TEAMS } from "components/common/constants";
import React, { FC } from "react";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Head: FC<Props> = ({ headRef, score }: Props) => {
  let leader: string | null = null;
  if (score.us > score.they) leader = "us";
  else if (score.they > score.us) leader = "they";

  return (
    <div className={styles.head} ref={headRef}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: TEAMS[TEAMS.length - 1] === team,
            })}
          >
            <div className={styles.content}>{team}</div>
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
