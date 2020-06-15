import React, { FC, useEffect, useRef, useState } from "react";
import { Body } from "./body/Body";
import { Foot } from "./foot/Foot";
import { Head } from "./head/Head";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC = () => {
  const headRef = useRef<HTMLDivElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);
  const footCellRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const minHeight =
      Number(headRef.current?.offsetHeight) +
      Number(footRef.current?.offsetHeight) +
      Number(footCellRef.current?.offsetHeight);

    setStyle({ minHeight });
  }, []);

  return (
    <div className={styles.table} style={style}>
      <Head headRef={headRef} />
      <Body />
      <Foot footCellRef={footCellRef} footRef={footRef} />
    </div>
  );
};
