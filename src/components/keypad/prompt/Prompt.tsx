import { useGameContext } from "game/context/GameContext";
import React, { FC } from "react";
import styles from "./Prompt.module.css";

export const Prompt: FC = () => {
  const { round } = useGameContext().state;

  return <h2 className={styles.prompt}>#{round} Vem bjöud?</h2>;
};
