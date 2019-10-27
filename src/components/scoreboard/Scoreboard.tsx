import React, { FC, useEffect, useState } from "react";
import { Result, Team } from "shared/types";
import { Props } from "./types";
import classNames from "classnames";
import { last } from "lodash";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC<Props> = ({ rounds, teams }) => {
  const [leader, setLeader] = useState<Team | null>(null);
  const [score, setScore] = useState<Result>({ they: 0, us: 0 });

  useEffect(() => {
    const currentScore = rounds.reduce(
      (result, round) => {
        if (!round.result) return result;

        return {
          they: result.they + round.result.they,
          us: result.us + round.result.us
        };
      },
      { they: 0, us: 0 }
    );

    setScore(currentScore);

    if (currentScore.us > currentScore.they) setLeader("us");
    else if (currentScore.us < currentScore.they) setLeader("they");
    else setLeader(null);
  }, [rounds]);

  return (
    <div className={styles.table}>
      <div className={styles.head}>
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

      <div className={styles.body}>
        {teams.map(team => (
          <div className={styles.column} key={team}>
            {rounds.map((round, index) => (
              <div
                className={classNames(styles.cell, {
                  [styles.reverse]: last(teams) === team
                })}
                key={index}
              >
                {!round.result && round.bid && round.bid.team === team && (
                  <>
                    <div className={styles.content}>{round.bid.points}</div>
                    <span
                      aria-label="Megaphone"
                      className={styles.emoji}
                      role="img"
                    >
                      📣
                    </span>
                  </>
                )}

                {round.result && (
                  <div className={styles.content}>{round.result[team]}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.foot}>
        {teams.map(team => (
          <div className={styles.column} key={team}>
            <div className={styles.cell}>
              <div className={styles.content}>{score[team]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
