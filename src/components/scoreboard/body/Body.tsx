import React, { FC } from "react";
import { Props } from "./types";
import classNames from "classnames";
import { last } from "lodash";
import scoreboardStyles from "../Scoreboard.module.css";
import styles from "./Body.module.css";

export const Body: FC<Props> = ({ bodyColumnRef, rounds, teams }) => {
  return (
    <div className={styles.body}>
      {teams.map(team => (
        <div className={scoreboardStyles.column} key={team} ref={bodyColumnRef}>
          {rounds.map((round, index) => (
            <div
              className={classNames(scoreboardStyles.cell, {
                [scoreboardStyles.reverse]: last(teams) === team
              })}
              key={index}
            >
              {!round.result && round.bid && round.bid.team === team && (
                <>
                  <div className={scoreboardStyles.content}>
                    {round.bid.points}
                  </div>
                  <span
                    aria-label="Megaphone"
                    className={scoreboardStyles.emoji}
                    role="img"
                  >
                    📣
                  </span>
                </>
              )}

              {round.result && (
                <div className={scoreboardStyles.content}>
                  {round.result[team]}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
