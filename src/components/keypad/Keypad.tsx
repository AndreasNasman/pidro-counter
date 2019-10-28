import { MAXIMUM_POINTS, MINIMUM_POINTS, TEAMS, Team } from "components/common";
import React, { FC, useEffect, useState } from "react";
import { Button } from "./button";
import { Props } from "./types";
import { TIMEOUT } from "./constants";
import buttonStyles from "./button/Button.module.css";
import range from "lodash.range";
import styles from "./Keypad.module.css";

export const Keypad: FC<Props> = ({ updateRounds }) => {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  const [numbers] = useState(range(MINIMUM_POINTS, MAXIMUM_POINTS + 1)); // eslint-disable-line no-magic-numbers
  const [activeNumber, setActiveNumber] = useState<number | null>(null);

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (activeTeam && activeNumber) {
      setDisableButton(true);

      setTimeout(() => {
        setActiveTeam(null);
        setActiveNumber(null);
        setDisableButton(false);

        updateRounds({ points: activeNumber, team: activeTeam });
      }, TIMEOUT);
    }
  }, [activeTeam, activeNumber, updateRounds]);

  const handleClick = (value: Team | number): void => {
    if (typeof value === "string") {
      setActiveTeam(activeTeam === value ? null : value);
    } else if (typeof value === "number") {
      setActiveNumber(activeNumber === value ? null : value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        {TEAMS.map(team => (
          <Button
            activeColor={buttonStyles.black}
            activeValue={activeTeam}
            disabled={disableButton}
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
            disabled={disableButton}
            handleClick={handleClick}
            key={number}
            value={number}
          />
        ))}
      </div>
    </div>
  );
};
