import React, { FC } from "react";
import { Props } from "./types";
import styles from "./Winner.module.css";

export const Winner: FC<Props> = ({ winningTeam }: Props) => (
  <div className={styles.container}>
    <span aria-label="Party Popper" role="img">
      🎉
    </span>
    <span className={styles.winner}>{winningTeam} vann!</span>
    <span aria-label="Party Popper" role="img">
      🎉
    </span>
  </div>
);
