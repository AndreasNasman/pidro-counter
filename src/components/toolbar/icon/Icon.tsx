import classNames from "classnames";
import React, { FC } from "react";
import styles from "./Icon.module.css";
import { Props } from "./types";

export const Icon: FC<Props> = ({ disabled, handleClick, IconType }: Props) => {
  return (
    <span
      className={classNames(styles.wrapper, {
        [styles.disabled]: disabled,
      })}
    >
      <IconType onClick={handleClick} />
    </span>
  );
};
