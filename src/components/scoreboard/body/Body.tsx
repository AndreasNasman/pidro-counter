import React, { FC, useEffect, useRef } from "react";
import { Props } from "./types";
import { TEAMS } from "components/common/constants";
import classNames from "classnames";
import styles from "../Scoreboard.module.css";

export const Body: FC<Props> = ({ rounds }) => {
  const bodyColumnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bodyColumnRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  return (
    <div className={styles.body}>
      {TEAMS.map(team => (
        <div className={styles.column} key={team} ref={bodyColumnRef}>
          {rounds.map((round, index) => (
            <div
              className={classNames(styles.cell, {
                [styles.reverse]: TEAMS[TEAMS.length - 1] === team
              })}
              key={index}
            >
              {typeof round.result === "object" ? (
                <div className={styles.content}>{round.result[team]}</div>
              ) : round.bid?.team === team ? (
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
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
