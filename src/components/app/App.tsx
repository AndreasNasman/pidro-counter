import { Keypad } from "components/keypad";
import React from "react";
import styles from "./App.module.css";

export const App: React.FC = () => {
  return (
    <div className={styles.felt}>
      <Keypad />
    </div>
  );
};
