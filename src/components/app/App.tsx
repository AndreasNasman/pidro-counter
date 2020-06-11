import React, { FC } from "react";
import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div className={styles.felt}>
      <div className={styles.grid}>game</div>
    </div>
  );
};

export default App;
