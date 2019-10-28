import React, { FC } from "react";
import { Props } from "./types";
import scoreboardStyles from "../Scoreboard.module.css";
import styles from "./Foot.module.css";

export const Foot: FC<Props> = ({ footCellRef, footRef, score, teams }) => (
  <div className={styles.foot} ref={footRef}>
    {teams.map(team => (
      <div className={scoreboardStyles.column} key={team}>
        <div className={scoreboardStyles.cell} ref={footCellRef}>
          <div className={scoreboardStyles.content}>{score[team]}</div>
        </div>
      </div>
    ))}
  </div>
);
