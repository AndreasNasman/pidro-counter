import { Props } from "./types";
import { QUESTIONS } from "./constants";
import React from "react";
import styles from "./Prompt.module.css";

export const Prompt: React.FC<Props> = ({ phase, round }) => (
  <>
    <h5 className={styles.round}>Round {round}</h5>
    <h2 className={styles.prompt}>{QUESTIONS[phase]}</h2>
  </>
);
