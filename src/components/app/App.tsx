import { Keypad } from "components/keypad/Keypad";
import { Scoreboard } from "components/scoreboard/Scoreboard";
import { Toolbar } from "components/toolbar/Toolbar";
import React, { FC } from "react";
import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div className={styles.felt}>
      <div className={styles.grid}>
        game
        <Scoreboard />
        <Toolbar />
        <Keypad />
      </div>
    </div>
  );
};

export default App;
