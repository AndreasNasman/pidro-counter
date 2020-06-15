import classNames from "classnames";
import { TEAMS, TEAM_TRANSLATION } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC } from "react";
import { Team } from "reducers/game/types";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Head: FC<Props> = ({ headRef }: Props) => {
  const { totalScore } = useGameContext().state;

  let leader: Team | null = null;
  if (totalScore.us > totalScore.they) leader = "us";
  else if (totalScore.they > totalScore.us) leader = "they";

  return (
    <div className={styles.head} ref={headRef}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team}>
          <div
            className={classNames(styles.cell, {
              [styles.reverse]: team === TEAMS[TEAMS.length - 1],
            })}
          >
            <div className={styles.content}>{TEAM_TRANSLATION[team]}</div>
            {team === leader && (
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
