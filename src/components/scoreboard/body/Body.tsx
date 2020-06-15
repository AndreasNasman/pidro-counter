import classNames from "classnames";
import { TEAMS } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC, useEffect, useRef } from "react";
import styles from "../Scoreboard.module.css";

export const Body: FC = () => {
  const { game } = useGameContext().state;

  const bodyColumnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() =>
    bodyColumnRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  );

  return (
    <div className={styles.body}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team} ref={bodyColumnRef}>
          {game.map((round, index) => (
            <div
              className={classNames(styles.cell, {
                [styles.reverse]: team === TEAMS[TEAMS.length - 1],
              })}
              key={index}
            >
              {round.score ? (
                <div className={styles.content}>{round.score[team]}</div>
              ) : (
                team === round.bid.team && (
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
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
