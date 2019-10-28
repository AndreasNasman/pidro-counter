import React, { FC, useEffect, useState } from "react";
import { Props } from "./types";
import { Team } from "shared/types";
import classNames from "classnames";
import { last } from "lodash";
import scoreboardStyles from "../Scoreboard.module.css";
import styles from "./Head.module.css";

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
        <div className={scoreboardStyles.column} key={team}>
          <div
            className={classNames(scoreboardStyles.cell, {
              [scoreboardStyles.reverse]: last(teams) === team
            })}
          >
            <div className={scoreboardStyles.content}>{team}</div>
            {leader === team && (
              <span
                aria-label="Chequered Flag"
                className={scoreboardStyles.emoji}
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
