import { NUMBERS, TIMEOUT } from "./constants";
import React, { FC, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Button } from "./button";
import { Props } from "./types";
import { TEAMS } from "components/common/constants";
import { Team } from "components/common/types";
import buttonStyles from "./button/Button.module.css";
import styles from "./Keypad.module.css";

export const Keypad: FC<Props> = ({ updateRounds }) => {
  const [{ activeTeam, activeNumber, disableButtons }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const update = (points: number, team: Team): void => {
    dispatch({ type: "DISABLE_BUTTONS" });

    setTimeout(() => {
      updateRounds({ points, team });
      dispatch({ type: "RESET" });
    }, TIMEOUT);
  };

  const handleClick = (value: Team | number): void => {
    if (typeof value === "string") {
      const team = activeTeam === value ? null : value;
      dispatch({ team, type: "SET_ACTIVE_TEAM" });
      if (team && activeNumber) update(activeNumber, team);
    } else if (typeof value === "number") {
      const number = activeNumber === value ? null : value;
      dispatch({ number, type: "SET_ACTIVE_NUMBER" });
      if (number && activeTeam) update(number, activeTeam);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        {TEAMS.map(team => (
          <Button
            active={team === activeTeam}
            activeColor={buttonStyles.black}
            disabled={disableButtons}
            handleClick={handleClick}
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
            handleClick={handleClick}
            key={number}
            value={number}
          />
        ))}
      </div>
    </div>
  );
};
