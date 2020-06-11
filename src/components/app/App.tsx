import { Keypad } from "components/keypad/Keypad";
import { Scoreboard } from "components/scoreboard/Scoreboard";
import React, { FC } from "react";
import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        game
        <Scoreboard />
        <Keypad />
      </div>
    </div>
  );
};

export default App;
