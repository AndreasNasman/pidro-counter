import React, { FC } from "react";
import { Props } from "./types";
import { TEAMS } from "components/common";
import styles from "../Scoreboard.module.css";

export const Foot: FC<Props> = ({ footCellRef, footRef, score }) => (
  <div className={styles.foot} ref={footRef}>
    {TEAMS.map(team => (
      <div className={styles.column} key={team}>
        <div className={styles.cell} ref={footCellRef}>
          <div className={styles.content}>{score[team]}</div>
        </div>
      </div>
    ))}
  </div>
);
