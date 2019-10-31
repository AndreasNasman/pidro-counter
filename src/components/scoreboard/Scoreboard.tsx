import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Props } from "./types";
import { Result } from "components/common/types";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC<Props> = ({ game }) => {
  const [score, setScore] = useState<Result>({ they: 0, us: 0 });
  useEffect(() => {
    const currentScore = game.reduce(
      (result, round) => {
        if (!round.result) return result;

        return {
          they: result.they + round.result.they,
          us: result.us + round.result.us
        };
      },
      { they: 0, us: 0 }
    );

    setScore(currentScore);
  }, [game]);

  const [minHeight, setMinHeight] = useState<number>();
  const headRef = useRef<HTMLDivElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);
  const footCellRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const { current: currentHeadRef } = headRef;
    const { current: currentFootRef } = footRef;
    const { current: currentFootCellRef } = footCellRef;
    if (
      currentHeadRef === null ||
      currentFootRef === null ||
      currentFootCellRef === null
    )
      return;

    const newMinHeight =
      currentHeadRef.offsetHeight +
      currentFootRef.offsetHeight +
      currentFootCellRef.offsetHeight;
    setMinHeight(newMinHeight);
  }, []);

  return (
    <div className={styles.table} style={{ minHeight }}>
      <Head headRef={headRef} score={score} />
      <Body game={game} />
      <Foot footCellRef={footCellRef} footRef={footRef} score={score} />
    </div>
  );
};
