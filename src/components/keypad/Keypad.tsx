import React, { FC, useState } from "react";
import { Button } from "components/button";
import { Team } from "types";
import buttonStyles from "components/button/Button.module.css";
import range from "lodash.range";
import styles from "./Keypad.module.css";

const MAXIMUM_POINTS = 14;
const MINIMUM_POINTS = 6;

export const Keypad: FC = () => {
  const [teams] = useState<Team[]>(["us", "they"]);
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  const [numbers] = useState(range(MINIMUM_POINTS, MAXIMUM_POINTS + 1)); // eslint-disable-line no-magic-numbers
  const [activeNumber, setActiveNumber] = useState<number | null>(null);

  const handleClick = (value: Team | number): void => {
    if (typeof value === "string") {
      setActiveTeam(activeTeam === value ? null : value);
    } else {
      setActiveNumber(activeNumber === value ? null : value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        {teams.map(team => (
          <Button
            activeColor={buttonStyles.black}
            activeValue={activeTeam}
            handleClick={handleClick}
            key={team}
            value={team}
          />
        ))}
      </div>

      <div className={styles.number}>
        {numbers.map(number => (
          <Button
            activeColor={buttonStyles.red}
            activeValue={activeNumber}
            handleClick={handleClick}
            key={number}
            value={number}
          />
        ))}
      </div>
    </div>
  );
};
