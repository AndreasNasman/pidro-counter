import React, { FC, useState } from "react";
import { Team } from "types";
import classNames from "classnames";
import range from "lodash.range";
import styles from "./Keypad.module.css";

const MAXIMUM_POINTS = 14;
const MINIMUM_POINTS = 6;

export const Keypad: FC = () => {
  const [teams] = useState<Team[]>(["us", "they"]);
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  const [numbers] = useState(range(MINIMUM_POINTS, MAXIMUM_POINTS + 1));
  const [activeNumber, setActiveNumber] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        {teams.map(team => (
          <button
            className={classNames(styles.button, {
              [styles.black]: activeTeam === team
            })}
            key={team}
            onClick={(): void =>
              setActiveTeam(activeTeam === team ? null : team)
            }
          >
            {team}
          </button>
        ))}
      </div>

      <div className={styles.number}>
        {numbers.map(number => (
          <button
            className={classNames(styles.button, {
              [styles.red]: activeNumber === number
            })}
            key={number}
            onClick={(): void =>
              setActiveNumber(activeNumber === number ? null : number)
            }
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
