import React, { FC, useEffect, useState } from "react";
import { Button } from "components/button";
import { Props } from "./types";
import { Team } from "types";
import buttonStyles from "components/button/Button.module.css";
import range from "lodash.range";
import styles from "./Keypad.module.css";

const MAXIMUM_POINTS = 14;
const MINIMUM_POINTS = 6;

const DELAY = 200;
const MAGNITUDE = 1000;
const TIMEOUT = parseFloat(buttonStyles.duration) * MAGNITUDE + DELAY;

export const Keypad: FC<Props> = ({ updateRounds }) => {
  const [teams] = useState<Team[]>(["us", "they"]);
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
        {teams.map(team => (
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
