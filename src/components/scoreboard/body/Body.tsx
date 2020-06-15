import classNames from "classnames";
import { TEAMS } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC, useEffect, useRef } from "react";
import styles from "../Scoreboard.module.css";

export const Body: FC = () => {
  const bodyColumnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    bodyColumnRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  const { game } = useGameContext().state;

  return (
    <div className={styles.body}>
      {TEAMS.map((team) => (
        <div className={styles.column} key={team} ref={bodyColumnRef}>
          {game.map((round, index) => (
            <div
              className={classNames(styles.cell, {
                [styles.reverse]: TEAMS[TEAMS.length - 1] === team,
              })}
              key={index}
            >
              {typeof round.score === "object" ? (
                <div className={styles.content}>{round.score[team]}</div>
              ) : (
                round.bid.team === team && (
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
