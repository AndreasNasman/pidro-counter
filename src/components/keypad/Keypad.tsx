import { TEAMS } from "components/common/constants";
import React, { FC } from "react";
import { Team } from "reducers/game/types";
import { NUMBERS } from "./constants";
import styles from "./Keypad.module.css";

export const Keypad: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Phase what?</h2>

      <div className={styles.team_container}>
        {TEAMS.map((team: Team) => (
          <button className={styles.button} key={team}>
            {team}
          </button>
        ))}
      </div>

      <div className={styles.digit_container}>
        {NUMBERS.map((digit: number) => (
          <button className={styles.button} key={digit}>
            {digit}
          </button>
        ))}
      </div>
    </div>
  );
};
