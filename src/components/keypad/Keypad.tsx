import {
  MAXIMUM_POINTS,
  MINIMUM_POINTS,
  TEAMS
} from "components/common/constants";
import React, { FC, useEffect, useState } from "react";
import { Button } from "./button";
import { Props } from "./types";
import { TIMEOUT } from "./constants";
import { Team } from "components/common/types";
import buttonStyles from "./button/Button.module.css";
import range from "lodash.range";
import styles from "./Keypad.module.css";

export const Keypad: FC<Props> = ({ updateRounds }) => {
  const [numbers] = useState(range(MINIMUM_POINTS, MAXIMUM_POINTS + 1));

  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
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
            active={team === activeTeam}
            activeColor={buttonStyles.black}
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
            active={number === activeNumber}
            activeColor={buttonStyles.red}
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
