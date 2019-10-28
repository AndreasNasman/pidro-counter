import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Props } from "./types";
import { Result } from "shared/types";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC<Props> = ({ rounds, teams }) => {
  const [score, setScore] = useState<Result>({ they: 0, us: 0 });

  useEffect(() => {
    const currentScore = rounds.reduce(
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
  }, [rounds]);

  const bodyColumnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const { current } = bodyColumnRef;
    if (!current) return;

    current.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  const [minHeight, setMinHeight] = useState<number>();
  const headRef = useRef<HTMLDivElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);
  const footCellRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const { current: currentHeadRef } = headRef;
    const { current: currentFootRef } = footRef;
    const { current: currentCellRef } = footCellRef;
    if (
      currentHeadRef === null ||
      currentFootRef === null ||
      currentCellRef === null
    )
      return;

    const newMinHeight =
      currentHeadRef.offsetHeight +
      currentFootRef.offsetHeight +
      currentCellRef.offsetHeight;
    setMinHeight(newMinHeight);
  }, []);

  return (
    <div className={styles.table} style={{ minHeight }}>
      <Head headRef={headRef} score={score} teams={teams} />
      <Body bodyColumnRef={bodyColumnRef} rounds={rounds} teams={teams} />
      <Foot
        footCellRef={footCellRef}
        footRef={footRef}
        score={score}
        teams={teams}
      />
    </div>
  );
};