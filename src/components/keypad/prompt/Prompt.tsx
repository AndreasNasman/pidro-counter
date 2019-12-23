import { Props } from "./types";
import { QUESTIONS } from "./constants";
import React from "react";
import styles from "./Prompt.module.css";

export const Prompt: React.FC<Props> = ({ phase }) => (
  <h2 className={styles.prompt}>{QUESTIONS[phase]}</h2>
);
