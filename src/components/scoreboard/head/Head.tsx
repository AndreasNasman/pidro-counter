import React, { FC } from "react";
import { Props } from "./types";
import { TEAMS } from "components/common/constants";
import classNames from "classnames";
import { last } from "lodash";
import styles from "../Scoreboard.module.css";

export const Head: FC<Props> = ({ headRef, score }) => {
  let leader: string | null = null;
  if (score.us > score.they) leader = "us";
  else if (score.they > score.us) leader = "they";

  return (
    <div className={styles.head} ref={headRef}>
      {TEAMS.map(team => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: last(TEAMS) === team
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
