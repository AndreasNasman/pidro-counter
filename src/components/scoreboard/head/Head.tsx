import React, { FC, useEffect, useState } from "react";
import { Props } from "./types";
import { Team } from "shared/types";
import classNames from "classnames";
import { last } from "lodash";
import styles from "../Scoreboard.module.css";

export const Head: FC<Props> = ({ headRef, score, teams }) => {
  const [leader, setLeader] = useState<Team | null>(null);

  useEffect(() => {
    if (score.us > score.they) setLeader("us");
    else if (score.they > score.us) setLeader("they");
    else setLeader(null);
  }, [score.us, score.they]);

  return (
    <div className={styles.head} ref={headRef}>
      {teams.map(team => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: last(teams) === team
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
