import { useGameContext } from "game/context/GameContext";
import React, { FC } from "react";
import styles from "./Prompt.module.css";

export const Prompt: FC = () => {
  const { phase, round } = useGameContext().state;

  return (
    <h2 className={styles.prompt}>
      #{round} {phase === "bid" ? "Vem bjöud" : "Vem vann"}?
    </h2>
  );
};
