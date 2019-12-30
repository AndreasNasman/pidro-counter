import { MdRedo, MdReplay, MdUndo } from "react-icons/md";
import React, { FC, useState } from "react";
import { Icon } from "./icon";
import { Popover } from "./popover";
import { Props } from "./types";
import styles from "./Toolbar.module.css";

export const Toolbar: FC<Props> = ({
  canRedo,
  canReset,
  canUndo,
  redo,
  reset,
  undo
}) => {
  const [resetPopover, setResetPopover] = useState(false);

  return (
    <div className={styles.container}>
      <Icon disabled={!canUndo} handleClick={undo} IconType={MdUndo} />

      <Popover
        affirmative={reset}
        close={(): void => setResetPopover(false)}
        isOpen={resetPopover}
      >
        <Icon
          disabled={!canReset}
          handleClick={(): void => setResetPopover(true)}
          IconType={MdReplay}
        />
      </Popover>

      <Icon disabled={!canRedo} handleClick={redo} IconType={MdRedo} />
    </div>
  );
};
