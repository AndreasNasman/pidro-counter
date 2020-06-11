import React, { FC } from "react";
import { MdRedo, MdReplay, MdUndo } from "react-icons/md";
import styles from "./Toolbar.module.css";

// Disabled, onclicks
export const Toolbar: FC = () => {
  return (
    <div className={styles.container}>
      <MdUndo />
      <MdReplay />
      <MdRedo />
    </div>
  );
};
