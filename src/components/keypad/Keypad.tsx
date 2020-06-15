import { TEAMS, TEAM_TRANSLATION } from "components/common/constants";
import { useGameContext } from "context/GameContext";
import React, { FC, useState } from "react";
import { Team } from "reducers/game/types";
import { Button } from "./button/Button";
import buttonStyles from "./button/Button.module.css";
import { NUMBERS, TIMEOUT } from "./constants";
import styles from "./Keypad.module.css";
import { Prompt } from "./prompt/Prompt";

export const Keypad: FC = () => {
  const { addBid, addScore, state } = useGameContext();
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const [disabled, setDisabled] = useState(false);

  const update = (points: number, team: Team): void => {
    setDisabled(true);

    setTimeout(() => {
      if (state.phase === "bid") addBid({ points, team });
      else addScore({ points, team });

      setActiveNumber(null);
      setActiveTeam(null);
      setDisabled(false);
    }, TIMEOUT);
  };

  const handleTeamClick = (team: Team): void => {
    setActiveTeam(team);
    if (activeNumber) update(activeNumber, team);
  };

  const handleNumberClick = (number: number): void => {
    setActiveNumber(number);
    if (activeTeam) update(number, activeTeam);
  };

  return (
    <div className={styles.container}>
      <Prompt />

      <div className={styles.team}>
        {TEAMS.map((team) => (
          <Button
            active={team === activeTeam}
            activeColor={buttonStyles.black}
            disabled={disabled}
            handleClick={handleTeamClick}
            key={team}
            text={TEAM_TRANSLATION[team]}
            value={team}
          />
        ))}
      </div>

      <div className={styles.number}>
        {NUMBERS.map((number) => (
          <Button
            active={number === activeNumber}
            activeColor={buttonStyles.red}
            disabled={disabled}
            handleClick={handleNumberClick}
            key={number}
            text={String(number)}
            value={number}
          />
        ))}
      </div>
    </div>
  );
};
