import { initialState } from "game/reducer/initialState";
import { reducer } from "game/reducer/reducer";
import React, { FC, useReducer } from "react";
import { createCtx } from "./helper";
import { determineScore } from "./logic";
import { Context, Input, Props } from "./types";

export const [useGameContext, GameContextProvider] = createCtx<Context>();

export const GameProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBid = (input: Input): void => {
    dispatch({ payload: input, type: "ADD_BID" });
  };

  const addScore = (input: Input): void => {
    const { bid } = state.game[state.game.length - 1];
    const score = determineScore(bid, input);
    dispatch({ payload: score, type: "ADD_SCORE" });
  };

  const reset = (): void => {
    dispatch({ type: "RESET" });
  };

  return (
    <GameContextProvider value={{ addBid, addScore, reset, state }}>
      {children}
    </GameContextProvider>
  );
};
