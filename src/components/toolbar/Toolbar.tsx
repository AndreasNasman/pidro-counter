/* eslint-disable no-console */
import React, { FC, useState } from "react";
import { MdRedo, MdReplay, MdUndo } from "react-icons/md";
import { Icon } from "./icon/Icon";
import { Popover } from "./popover/Popover";
import styles from "./Toolbar.module.css";

export const Toolbar: FC = () => {
  const [popover, setPopover] = useState(false);

  return (
    <div className={styles.container}>
      <Icon
        disabled={false}
        handleClick={(): void => console.log("Undo")}
        IconType={MdUndo}
      />

      <Popover
        affirmative={(): void => console.log("Yes!")}
        close={(): void => {
          console.log("Close");
          setPopover(false);
        }}
        isOpen={popover}
      >
        <Icon
          disabled={false}
          handleClick={(): void => {
            console.log("Replay");
            setPopover(true);
          }}
          IconType={MdReplay}
        />
      </Popover>

      <Icon
        disabled={false}
        handleClick={(): void => console.log("Redo")}
        IconType={MdRedo}
      />
    </div>
  );
};
