import { TEAMS } from "components/common/constants";
import React, { FC } from "react";
import styles from "../Scoreboard.module.css";
import { Props } from "./types";

export const Foot: FC<Props> = ({ footCellRef, footRef, score }: Props) => (
  <div className={styles.foot} ref={footRef}>
    {TEAMS.map((team) => (
      <div className={styles.column} key={team}>
        <div className={styles.cell} ref={footCellRef}>
          <div className={styles.content}>{score[team]}</div>
        </div>
      </div>
    ))}
  </div>
);
