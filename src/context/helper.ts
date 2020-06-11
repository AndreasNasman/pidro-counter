// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

/* eslint-disable line-comment-position */
/* eslint-disable no-inline-comments */
/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable func-style */

import React from "react";

export function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
