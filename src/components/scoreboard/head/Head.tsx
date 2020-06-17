import classNames from "classnames";
import { TEAMS, TEAM_TRANSLATION } from "game/constants";
import { useGameContext } from "game/context/GameContext";
import { Team } from "game/reducer/types";
import React, { FC } from "react";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Head: FC<Props> = ({ headRef }: Props) => {
  const { totalScore, winner } = useGameContext().state;

  let leader: Team | null = null;
  if (winner) leader = null;
  else if (totalScore.us > totalScore.they) leader = "us";
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
