import { TEAMS, TEAM_TRANSLATION } from "game/constants";
import { useGameContext } from "game/context/GameContext";
import { Team } from "game/reducer/types";
import React, { FC, useState } from "react";
import { Button } from "./button/Button";
import buttonStyles from "./button/Button.module.css";
import { POINTS, TIMEOUT } from "./constants";
import styles from "./Keypad.module.css";
import { Prompt } from "./prompt/Prompt";
import { Winner } from "./winner/Winner";

export const Keypad: FC = () => {
  const { addBid, addScore, state } = useGameContext();
  const { phase, winner } = state;

  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [disabled, setDisabled] = useState(false);

  const update = (points: number, team: Team): void => {
    setDisabled(true);

    setTimeout(() => {
      if (phase === "bid") addBid({ points, team });
      else addScore({ points, team });

      setActivePoint(null);
      setActiveTeam(null);
      setDisabled(false);
    }, TIMEOUT);
  };

  const handlePointClick = (point: number): void => {
    setActivePoint(point);
    if (activeTeam) update(point, activeTeam);
  };

  const handleTeamClick = (team: Team): void => {
    setActiveTeam(team);
    if (activePoint) update(activePoint, team);
  };

  return (
    <div className={styles.container}>
      {winner ? (
        <Winner winningTeam={TEAM_TRANSLATION[winner]} />
      ) : (
        <>
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
            {POINTS.map((number) => (
              <Button
                active={number === activePoint}
                activeColor={buttonStyles.red}
                disabled={disabled}
                handleClick={handlePointClick}
                key={number}
                text={String(number)}
                value={number}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
