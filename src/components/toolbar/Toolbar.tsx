import React, { FC } from "react";
import { MdRedo, MdReplay, MdUndo } from "react-icons/md";
import { Icon } from "./icon/Icon";
import styles from "./Toolbar.module.css";

export const Toolbar: FC = () => {
  return (
    <div className={styles.container}>
      <Icon
        disabled={false}
        handleClick={(): void => {
          // eslint-disable-next-line no-console
          console.log("Undo");
        }}
        IconType={MdUndo}
      />

      <Icon
        disabled={false}
        handleClick={(): void => {
          // eslint-disable-next-line no-console
          console.log("Replay");
        }}
        IconType={MdReplay}
      />

      <Icon
        disabled={false}
        handleClick={(): void => {
          // eslint-disable-next-line no-console
          console.log("Redo");
        }}
        IconType={MdRedo}
      />
    </div>
  );
};
