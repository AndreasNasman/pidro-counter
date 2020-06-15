import classNames from "classnames";
import React, { forwardRef } from "react";
import styles from "./Icon.module.css";
import { Props } from "./types";

export const Icon = forwardRef<HTMLSpanElement, Props>(
  ({ disabled, handleClick, IconType }: Props, ref) => (
    <span
      className={classNames(styles.wrapper, {
        [styles.disabled]: disabled,
      })}
      ref={ref}
    >
      <IconType onClick={handleClick} />
    </span>
  )
);

Icon.displayName = "Icon";
