import React, { FC } from "react";
import { Props } from "./types";
import styles from "../Scoreboard.module.css";

export const Foot: FC<Props> = ({ footCellRef, footRef, score, teams }) => (
  <div className={styles.foot} ref={footRef}>
    {teams.map(team => (
      <div className={styles.column} key={team}>
        <div className={styles.cell} ref={footCellRef}>
          <div className={styles.content}>{score[team]}</div>
        </div>
      </div>
    ))}
  </div>
);
