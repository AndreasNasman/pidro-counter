import { TEAMS } from "components/common/constants";
import React, { FC, useState } from "react";
import { Team } from "reducers/game/types";
import { Button } from "./button/Button";
import buttonStyles from "./button/Button.module.css";
import { NUMBERS } from "./constants";
import styles from "./Keypad.module.css";

export const Keypad: FC = () => {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const [disableButtons] = useState(false);

  const handleTeamClick = (team: Team): void => {
    setActiveTeam(team);
  };

  const handleNumberClick = (number: number): void => {
    setActiveNumber(number);
  };

  return (
    <div className={styles.container}>
      <h2>Phase what?</h2>

      <div className={styles.team}>
        {TEAMS.map((team) => (
          <Button
            active={team === activeTeam}
            activeColor={buttonStyles.black}
            disabled={disableButtons}
            handleClick={handleTeamClick}
            key={team}
            value={team}
          />
        ))}
      </div>

      <div className={styles.number}>
        {NUMBERS.map((number) => (
          <Button
            active={number === activeNumber}
            activeColor={buttonStyles.red}
            disabled={disableButtons}
            handleClick={handleNumberClick}
            key={number}
            value={number}
          />
        ))}
      </div>
    </div>
  );
};
