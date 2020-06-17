import { Keypad } from "components/keypad/Keypad";
import { Scoreboard } from "components/scoreboard/Scoreboard";
import { Toolbar } from "components/toolbar/Toolbar";
import { useGameContext } from "game/context/GameContext";
import React, { FC } from "react";
import Confetti from "react-confetti";
import styles from "./App.module.css";
import { DEFAULT_NUMBER_OF_PIECES } from "./constants";
import { useBodySize } from "./useBodySize";

export const App: FC = () => {
  const { winner } = useGameContext().state;
  const { height, width } = useBodySize();

  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        <Scoreboard />
        <Toolbar />
        <Keypad />

        <Confetti
          height={height}
          numberOfPieces={winner ? DEFAULT_NUMBER_OF_PIECES : 0}
          width={width}
        />
      </div>
    </div>
  );
};
