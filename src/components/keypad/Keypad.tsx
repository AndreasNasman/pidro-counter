import { NUMBERS, TIMEOUT } from "./constants";
import React, { FC, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Button } from "./button";
import { Prompt } from "./prompt";
import { Props } from "./types";
import { TEAMS } from "components/common/constants";
import { Team } from "components/common/types";
import buttonStyles from "./button/Button.module.css";
import styles from "./Keypad.module.css";

export const Keypad: FC<Props> = ({ addBid, addResult, phase }) => {
  const [{ activeTeam, activeNumber, disableButtons }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const update = (points: number, team: Team): void => {
    dispatch({ type: "DISABLE_BUTTONS" });

    setTimeout(() => {
      phase === "bid" ? addBid({ points, team }) : addResult({ points, team });
      dispatch({ type: "RESET" });
    }, TIMEOUT);
  };

  const handleTeamClick = (team: Team): void => {
    dispatch({ team, type: "SET_ACTIVE_TEAM" });
    if (activeNumber) update(activeNumber, team);
  };

  const handleNumberClick = (number: number): void => {
    dispatch({ number, type: "SET_ACTIVE_NUMBER" });
    if (activeTeam) update(number, activeTeam);
  };

  return (
    <div className={styles.container}>
      <Prompt phase={phase} />

      <div className={styles.team}>
        {TEAMS.map(team => (
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
        {NUMBERS.map(number => (
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
